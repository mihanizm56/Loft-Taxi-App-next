import React from "react";
import TextFieldMaterial from "@material-ui/core/TextField";

export const TextField = ({
	value,
	input,
	label,
	meta: { touched, invalid, error },
	...custom
}) => (
	<TextFieldMaterial
		fullWidth
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
		{...custom}
	/>
);
