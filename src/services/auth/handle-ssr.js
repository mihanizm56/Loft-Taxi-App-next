import { Cookies } from "react-cookie";
import Router from "next/router";
import { fetchAccessTokenRequest } from "../api/requests";
import { loginAction, logoutAction } from "../../redux/modules/auth/actions";
import { LOGIN_URL, AUTH_URL } from "../../constants";
import { isServerPlatform } from "../../utils/helpers";

export const handleAuthSSR = async ({ ctx }) => {
	let token = null;
	const isLoginPage = ctx.pathname === LOGIN_URL;
	const isAuthPage = ctx.pathname === AUTH_URL;
	console.log("pathname", ctx.pathname);
	const {
		store: { dispatch },
	} = ctx;

	// if context has request info aka Server Side
	if (isServerPlatform({ req: ctx.req, isServer: ctx.isServer })) {
		// на сервере
		if (ctx.req.headers.cookie) {
			// есть кука в заголовке
			/* eslint-disable */
			token = ctx.req.headers.cookie.replace(
				/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/,
				"$1"
			);
			/* eslint-enables */
			console.log("получен токен из кук на сервере", token);
		} else {
			// нет куки в заголовке
			console.log("не получен токен из кук на сервере");
			ctx.res.writeHead(302, {
				Location: "/login",
			});
			ctx.res.end();
		}
	} else {
		// на клиенте
		const cookies = new Cookies();

		token = cookies.get("access_token");
		console.log("получен токен из кук на клиенте", token);
	}

	if (token) {
		try {
			const { message, error } = await fetchAccessTokenRequest({ token });
			console.log("resultOfTokenLogin", message, error);

			if (isServerPlatform({ req: ctx.req, isServer: ctx.isServer })) {
				// есть токен на сервере в куках
				console.log("есть токен на сервере в куках", token);
				if (message && !error) {
					if (isLoginPage) {
						// если на странице логина пришло 200 при проверке токена в куках
						console.log(
							"на странице логина на сервере пришло 200 при проверке токена в куках редирект на главную"
						);

						ctx.res.writeHead(302, {
							Location: "/main",
						});
						ctx.res.end();
					} else if (!isLoginPage && !isAuthPage) {
						// если пришло 200 на странице не логина и не авторизации надо диспатчить экшен логина
						console.log(
							"пришло 200 на странице не логина и не авторизации надо диспатчить экшен логина"
						);
						dispatch(loginAction());
					}
				} else if (error && !isLoginPage && !isAuthPage) {
					// если пришло не 200 на странице не логина и не авторизации
					console.log(
						"пришло не 200 на странице не логина и не авторизации на сервере редирект на страницу авторизации"
					);
					dispatch(logoutAction());
					ctx.res.writeHead(302, {
						Location: "/login",
					});
					ctx.res.end();
				}
			} else {
				// есть токен на клиенте в куках
				/* eslint-disable */
				if (message && !error && isLoginPage) {
					// если на странице логина пришло 200 при проверке токена в куках
					console.log(
						"на странице логина на клиенте пришло 200 при проверке токена в куках редирект на главную"
					);
					Router.push("/main");
				} else if (error && !isLoginPage && !isAuthPage) {
					// если пришло не 200 на странице не логина и не авторизации
					console.log(
						"пришло не 200 на странице не логина и не авторизации на клиенте редирект на страницу авторизации"
					);
					dispatch(logoutAction());
					Router.push("/login");
				}
				/* eslint-enable */
			}
		} catch (error) {
			console.log("error in fetchAccessTokenRequest", error);

			// ошибка при запросе с токеном
			if (isServerPlatform({ req: ctx.req, isServer: ctx.isServer })) {
				// на сервере
				dispatch(logoutAction());
				ctx.res.writeHead(302, {
					Location: "/login",
				});
				ctx.res.end();
			} else {
				// на клиенте
				dispatch(logoutAction());
				Router.push("/login");
			}
		}
	} else {
		// нет токена
		console.log("нет токена");
		if (isServerPlatform({ req: ctx.req, isServer: ctx.isServer })) {
			if (!isLoginPage && !isAuthPage) {
				// нет токена на сервере не на странице авторизации логина
				console.log(
					"нет токена на сервере не на странице авторизации логина, редирект на страницу авторизации"
				);
				ctx.res.writeHead(302, {
					Location: "/login",
				});
				ctx.res.end();
			} else {
				// нет токена на сервере, находимся на странице авторизации либо создания пользователя
				console.log(
					"нет токена на сервере, находимся на странице авторизации либо создания пользователя"
				);
			}
		} else {
			// нет токена на клиенте
			/* eslint-disable */
			if (!isLoginPage && !isAuthPage) {
				// если не на странице авторизации, то редирект на неё
				console.log("нет токена на клиенте редирект на страницу авторизации");
				Router.push("/login");
			} else {
				// нет токена на клиенте, находимся на странице авторизации
				console.log("нет токена на клиенте, находимся на странице авторизации");
			}
			/* eslint-enable */
		}
	}
};
