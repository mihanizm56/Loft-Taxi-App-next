import React from "react";
import { connect } from "react-redux";
import {
	closePlaceDialogPut,
	getPlaceDialogState,
} from "../../redux/modules/places-dialog";

const flagToCheckDialogWasShown = process.env.DIALOG_FLAG;

class WrappedContainer extends React.Component {
	handleCloseDialog = () => {
		const { closeDialog } = this.props;

		closeDialog({ wasLocationDialogShown: flagToCheckDialogWasShown });
	};

	render() {
		const { children, needToShowDialog } = this.props;
		const { handleCloseDialog } = this;

		return children({
			needToShowDialog,
			handleCloseDialog,
		});
	}
}

const mapStateToProps = store => ({
	needToShowDialog: getPlaceDialogState(store),
});

export const ReduxContainer = connect(
	mapStateToProps,
	{ closeDialog: closePlaceDialogPut }
)(WrappedContainer);
