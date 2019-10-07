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
	const actualDate = new Intl.DateTimeFormat("en").format(new Date());

	const handleChange = (e, value) => {
		const initialDateValue = value.split("/");
		const resultDateValue = `${initialDateValue[1]}/${initialDateValue[0]}/${initialDateValue[2]}`;

		console.log("resultDateValue", resultDateValue);

		change(input.name, resultDateValue);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				{...input}
				fullWidth={fullWidth}
				disableToolbar
				variant="inline"
				format="dd/MM/yyyy"
				error={touched && error}
				helperText={touched && error}
				value={input.value || actualDate}
				inputProps={inputProps}
				onChange={handleChange}
			/>
		</MuiPickersUtilsProvider>
	);
};
