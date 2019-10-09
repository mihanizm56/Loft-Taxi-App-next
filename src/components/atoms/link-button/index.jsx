import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";

export const LinkButton = ({ path, text, style, variant, color }) => (
	<Link href={path} passHref>
		<Button
			component="a"
			to={path}
			style={style}
			variant={variant}
			color={color}
		>
			{text}
		</Button>
	</Link>
);
