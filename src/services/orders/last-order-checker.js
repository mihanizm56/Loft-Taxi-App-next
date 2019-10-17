import { Cookies } from "react-cookie";
import {
	setOrderData,
	setOrderErrorAction,
	removeOrderErrorAction,
	setCredsEmpty,
	setCredsFull,
} from "../../redux/modules/orders";
import { setCoordsActions } from "../../redux/modules/addresses";
import { fetchGetUserCreds, fetchGetLastOrder, fetchUpdOrder } from "../api";
import { isServerPlatform } from "../../utils/helpers/server-checker";
import { INTERNAL_SERVER_ERROR } from "../../constants";

export const handleLastOrderStatus = async ({ ctx }) => {
	let token;
	const {
		store: { dispatch },
	} = ctx;

	// remove previous error
	dispatch(removeOrderErrorAction());

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
		console.log("get token in handleLastOrderStatus");

		try {
			const {
				error: userCredsError,
				empty: areUserCredsEmpty,
			} = await fetchGetUserCreds({
				token,
			});
			console.log(
				"результат запроса fetchGetUserCreds",
				userCredsError,
				areUserCredsEmpty
			);

			// ошибка
			if (userCredsError) {
				console.log(
					"получил ошибку в запросе fetchGetUserCreds",
					userCredsError
				);
				dispatch(setOrderErrorAction(userCredsError));
				return;
			}

			// есть креды
			if (!areUserCredsEmpty) {
				console.log("есть креды в ответе");
				dispatch(setCredsFull());
			}

			// нет кредов
			if (areUserCredsEmpty) {
				console.log("нет кредов в ответе");
				dispatch(setCredsEmpty());
			}

			const { error: lastOrderError, order } = await fetchGetLastOrder({
				token,
			});

			// Ошибка при запросе за последним заказом
			if (lastOrderError) {
				console.log("получил ошибку при запросе за последним заказом", error);
				dispatch(setOrderErrorAction(error));
				return;
			}

			// кейс когда нет кредов но каким то образом заказ был сделан
			if (order && areUserCredsEmpty) {
				console.log("нет кредов но заказ был сделан");
				const orderId = order["order_id"];

				await fetchUpdOrder({ orderId, token });
				dispatch(setCredsEmpty());
			}

			// есть креды и есть заказ
			if (order) {
				console.log("есть креды и есть заказ");
				dispatch(
					setCoordsActions({ from: order.from_coords, to: order.to_coords })
				);
				dispatch(setOrderData(order));
			}
		} catch (error) {
			console.log("error in handleLastOrderStatus", error);
			dispatch(setOrderErrorAction(INTERNAL_SERVER_ERROR));
		}
	} else {
		console.log("cant get any data without token");
		return;
	}
};
