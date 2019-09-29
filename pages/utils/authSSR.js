import { fetchAccessTokenRequest } from "../../src/services/api/requests";

export const handleAuthSSR = async ({ ctx }) => {
	if (ctx.req) {
		/* eslint-disable */
		// get token on the server
		const token = ctx.req.headers.cookie.replace(
			/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/,
			"$1"
		);
		/* eslint-enable */

		if (token) {
			const { message, error } = await fetchAccessTokenRequest({ token });
			console.log("resultOfTokenLogin", message, error);

			if (message && !error) {
				console.log("TOKEN VERIFIED FROM SERVER");
				ctx.res.writeHead(302, {
					Location: "/main",
				});

				ctx.res.end();
			}
		}
	}

	// если надо на клиенте ловить токен в куке - смотри сюда!!!!!!!!!!!!!!!!!!!!!!!!
	// else {
	// 	// get token on the client

	// 	token = cookies.get("access_token");
	// 	console.log("test client token", cookies.get("access_token"));
	// }

	// try {
	// 	const response = await axios.get(serverUrl + "/api/token/ping", {
	// 		headers: { Authorization: token },
	// 	});
	// 	// dont really care about response, as long as it not an error
	// 	console.log("token ping:", response.data.msg);
	// } catch (err) {
	// 	// in case of error
	// 	console.log(err.response.data.msg);
	// 	console.log("redirecting back to main page");
	// 	// redirect to login
	// 	if (ctx.res) {
	// 		ctx.res.writeHead(302, {
	// 			Location: "/",
	// 		});
	// 		ctx.res.end();
	// 	} else {
	// 		Router.push("/");
	// 	}
	// }
};
