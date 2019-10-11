import { Cookies } from "react-cookie";

const cookies = new Cookies();

// eslint-disable-next-line
export const saveTokens = ({ access_token, refresh_token }) => {
	cookies.set("access_token", access_token);
	cookies.set("refresh_token", refresh_token);
};

export const removeTokens = () => {
	cookies.remove("access_token");
	cookies.remove("refresh_token");
};
