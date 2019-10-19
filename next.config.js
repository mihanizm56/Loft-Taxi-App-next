const withCSS = require("@zeit/next-css");
const webpack = require("webpack");

require("dotenv").config();

module.exports = withCSS({
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
});
