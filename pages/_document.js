import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import { withTranslation } from "../i18n";

class MyDocument extends Document {
	static getInitialProps = async ctx => {
		// 	// Resolution order
		// 	//
		// 	// On the server:
		// 	// 1. app.getInitialProps
		// 	// 2. page.getInitialProps
		// 	// 3. document.getInitialProps
		// 	// 4. app.render
		// 	// 5. page.render
		// 	// 6. document.render
		// 	//
		// 	// On the server with error:
		// 	// 1. document.getInitialProps
		// 	// 2. app.render
		// 	// 3. page.render
		// 	// 4. document.render
		// 	//
		// 	// On the client
		// 	// 1. app.getInitialProps
		// 	// 2. page.getInitialProps
		// 	// 3. app.render
		// 	// 4. page.render

		// 	// Render app and page and get the context of the page with collected side effects.
		const sheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: App => props => sheets.collect(<App {...props} />),
			});

		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			// Styles fragment is rendered after the app and page rendering finish.
			styles: [
				<React.Fragment key="styles">
					{initialProps.styles}
					{sheets.getStyleElement()}
				</React.Fragment>,
			],
		};
	};

	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default withTranslation("common")(MyDocument);
