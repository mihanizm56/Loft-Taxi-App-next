import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";

export const LinkButton = ({ handleClick, path, text }) => (
	<Link href={path} passHref>
		<Button component="a" onClick={handleClick && handleClick} to={path} >{text}</Button>
	</Link>
);
