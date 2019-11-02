import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const removePlaceDialogFlag = () => cookies.remove("plc_dialog");

export const savePlaceDialogFlag = ({ flag }) =>
	cookies.set("plc_dialog", flag);
