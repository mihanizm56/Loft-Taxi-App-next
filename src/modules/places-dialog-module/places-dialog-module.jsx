import React from "react";
import { PlacesDialogBox } from "../../components/molecules";
import { ReduxContainer } from "./redux-container";

export const PlacesDialogModule = () => {
	return (
		<ReduxContainer>
			{({ needToShowDialog, handleCloseDialog }) =>
				needToShowDialog && (
					<PlacesDialogBox handleCloseDialog={handleCloseDialog} />
				)
			}
		</ReduxContainer>
	);
};
