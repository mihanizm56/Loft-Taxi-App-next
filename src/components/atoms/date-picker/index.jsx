import React from "react";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const DatePicker = props => {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				{...props}
				disableToolbar
				variant="inline"
				format="dd/MM/yyyy"
				defaultValue=""
			/>
		</MuiPickersUtilsProvider>
	);
};
