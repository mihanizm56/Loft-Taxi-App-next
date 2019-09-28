import React from "react";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";

export const MaskedInput = ({
	input,
	label,
	meta: { touched, invalid, error },
}) => (
	// eslint-disable-next-line
	<InputMask mask="9999 9999 9999 9999" {...input} maskChar=" ">
		{() => (
			<TextField
				fullWidth
				label={label}
				placeholder={label}
				error={touched && invalid}
				helperText={touched && error}
			/>
		)}
	</InputMask>
);
