import { createAction } from "redux-actions";
import {
	PUT_CREDENTIALS_NAMESPACE,
	REMOVE_CREDENTIALS_NAMESPACE,
} from "./constants";

export const putCredentialsAction = createAction(PUT_CREDENTIALS_NAMESPACE);
export const removeCredentialsAction = createAction(
	REMOVE_CREDENTIALS_NAMESPACE
);
