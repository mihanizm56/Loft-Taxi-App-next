// import { Cookies } from "react-cookie";
// import Router from "next/router";
// import { fetchAccessTokenRequest } from "../../../services/api/requests";
// import { loginAction } from "../../../redux/modules/auth/actions";
// import { LOGIN_URL, AUTH_URL } from "../../../constants";

export const handleAuthSSR = async () => {
	// server
	// if (ctx.isServer && ctx.req && Boolean(ctx.req.headers.cookie)) {
	// 	/* eslint-disable */
	// 	const token = ctx.req.headers.cookie.replace(
	// 		/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/,
	// 		"$1"
	// 	);
	// 	/* eslint-enable */
	// 	const isLoginPage = ctx.pathname === LOGIN_URL;
	// 	const isAuthPage = ctx.pathname === AUTH_URL;
	// 	const { store } = ctx;
	// 	console.log("pathname", ctx.pathname);
	// 	if (token) {
	// 		try {
	// 			const { message, error } = await fetchAccessTokenRequest({ token });
	// 			console.log("resultOfTokenLogin", message, error);
	// 			if (message && !error) {
	// 				console.log("TOKEN VERIFIED FROM SERVER");
	// 				if (isLoginPage) {
	// 					ctx.res.writeHead(302, {
	// 						Location: "/main",
	// 					});
	// 					ctx.res.end();
	// 				}
	// 				store.dispatch(loginAction());
	// 			}
	// 			if (error && !isLoginPage && !isAuthPage) {
	// 				console.log("NOT VALID TOKEN");
	// 				ctx.res.writeHead(302, {
	// 					Location: "/login",
	// 				});
	// 				ctx.res.end();
	// 			}
	// 		} catch (error) {
	// 			console.log("error in handleAuthSSR", error);
	// 		}
	// 	} else if (!isLoginPage && !isAuthPage) {
	// 		console.log("NO TOKEN IN COOKIES");
	// 		ctx.res.writeHead(302, {
	// 			Location: "/login",
	// 		});
	// 		ctx.res.end();
	// 	}
	// } else {
	// 	// client
	// 	const cookies = new Cookies();
	// 	const token = cookies.get("access_token");
	// 	const isLoginPage = ctx.pathname === LOGIN_URL;
	// 	const isAuthPage = ctx.pathname === AUTH_URL;
	// 	const { store } = ctx;
	// 	console.log("CLIENT");
	// 	console.log("pathname", ctx.pathname);
	// 	if (token) {
	// 		try {
	// 			const { message, error } = await fetchAccessTokenRequest({ token });
	// 			console.log("resultOfTokenLogin", message, error);
	// 			if (message && !error) {
	// 				console.log("TOKEN VERIFIED FROM SERVER");
	// 				Router.push("/main");
	// 				store.dispatch(loginAction());
	// 			}
	// 			if (error && !isLoginPage && !isAuthPage) {
	// 				console.log("NOT VALID TOKEN");
	// 				Router.push("/login");
	// 			}
	// 		} catch (error) {
	// 			console.log("error in handleAuthSSR", error);
	// 		}
	// 	} else if (!isLoginPage && !isAuthPage) {
	// 		console.log("NO TOKEN IN COOKIES");
	// 		Router.push("/login");
	// 	}
	// }
};
