/* eslint-disable */

const webpack = require("webpack");

if (!process.env.NOW_REGION) {
	// if deploying with now-ci env values are taken not from .env but from now.json
	// https://zeit.co/docs/v2/deployments/environment-variables-and-secrets/
	// now deployment breaks if dotenv used
	require("dotenv").config();
}

const { PHASE_PRODUCTION_SERVER } =
	process.env.NODE_ENV === "development"
		? {}
		: !process.env.NOW_REGION
		? require("next/constants")
		: require("next-server/constants");

require("dotenv").config();

const myConfig = {
	publicRuntimeConfig: {
		localeSubpaths:
			typeof process.env.LOCALE_SUBPATHS === "string"
				? process.env.LOCALE_SUBPATHS
				: "none",
	},
	webpack: (config, { isServer }) => {
		// process.env setup for react

		// eslint-disable-next-line
		config.node = {
			fs: "empty",
		};

		const env = Object.keys(process.env).reduce((acc, curr) => {
			acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
			return acc;
		}, {});

		config.plugins.push(new webpack.DefinePlugin(env));
		config.plugins.push(
			new webpack.DefinePlugin({
				__CLIENT__: !isServer,
			})
		);

		// polyfills setup
		const originalEntry = config.entry;
		// eslint-disable-next-line
		config.entry = async () => {
			const entries = await originalEntry();

			if (
				entries["main.js"] &&
				!entries["main.js"].includes("./client/polyfills.js")
			) {
				entries["main.js"].unshift("./client/polyfills.js");
			}

			return entries;
		};

		return config;
	},
};

module.exports = phase => {
	if (phase === PHASE_PRODUCTION_SERVER) {
		// Config used to run in production.
		return myConfig;
	}

	const withCSS = require("@zeit/next-css"); // eslint-disable-line

	return withCSS(myConfig);
};
