import React from "react";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const DatePicker = ({
	input,
	meta: { touched, error },
	fullWidth,
	inputProps,
	change,
}) => {
	const handleChange = (event, value) => {
		const initialDateValue = value.split("/");
		const resultDateValue = `${initialDateValue[1]}/${initialDateValue[0]}/${initialDateValue[2]}`;
		const pureValue = new Date(Date.parse(resultDateValue));

		change(input.name, pureValue);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				{...input}
				fullWidth={fullWidth}
				disableToolbar
				variant="inline"
				format="dd/MM/yyyy"
				disablePast
				error={touched && error}
				helperText={touched && error}
				inputProps={inputProps}
				onChange={handleChange}
			/>
		</MuiPickersUtilsProvider>
	);
};
