import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";

export const LinkButton = ({ path, text, style }) => (
	<Link href={path} passHref>
		<Button component="a" to={path} style={style}>
			{text}
		</Button>
	</Link>
);
