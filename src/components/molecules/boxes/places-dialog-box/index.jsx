import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withTranslation } from "../../../../../i18n";
import { Transition } from "../../../atoms";

export const WrappedComponent = ({ handleCloseDialog, t: translate }) => (
	<Dialog
		open
		TransitionComponent={Transition}
		keepMounted
		onClose={handleCloseDialog}
		aria-labelledby="alert-dialog-slide-title"
		aria-describedby="alert-dialog-slide-description"
	>
		<DialogTitle id="alert-dialog-slide-title">
			{translate("notification-title")}
		</DialogTitle>
		<DialogContent>
			<DialogContentText id="alert-dialog-slide-description">
				{translate("notification-content-text")}
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={handleCloseDialog} color="primary">
				{translate("notification-button-text")}
			</Button>
		</DialogActions>
	</Dialog>
);

export const PlacesDialogBox = withTranslation("places-dialog-box")(
	WrappedComponent
);
