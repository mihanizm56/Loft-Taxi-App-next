import { Cookies } from "react-cookie";
import { isServerPlatform } from "../../utils";
import {
	showPlaceDialog,
	closePlaceDialogPut,
} from "../../redux/modules/places-dialog";

export const showDialogAboutPlaces = ({ ctx }) => {
	const {
		store: { dispatch },
	} = ctx;
	const isServer = isServerPlatform({ req: ctx.req, isServer: ctx.isServer });
	let wasLocationDialogShown; // флаг уведомления о местах из кук на клиенте

	if (isServer) {
		if (ctx.req.headers.cookie) {
			// есть кука в заголовке
			/* eslint-disable */
			wasLocationDialogShown = ctx.req.headers.cookie.replace(
				/(?:(?:^|.*;\s*)plc_dialog\s*\=\s*([^;]*).*$)|^.*$/,
				"$1"
			);
			/* eslint-enables */
			console.log(
				"получен флаг уведомления о местах из кук на сервере",
				wasLocationDialogShown
			);
		} else {
			// нет куки в заголовке
			console.log("НЕ получен флаг уведомления о местах из кук на сервере");
		}
	} else {
		const cookies = new Cookies();

		wasLocationDialogShown = cookies.get("plc_dialog");
		console.log(
			"получен флаг уведомления о местах из кук на клиенте",
			wasLocationDialogShown
		);
	}

	if (wasLocationDialogShown) {
		// if (!isServer) {
		dispatch(closePlaceDialogPut({ wasLocationDialogShown }));
		// }
	} else {
		// if (!isServer) {
		dispatch(showPlaceDialog());
		// }
	}
};
