/* eslint-disable */

import App from "next/app";
import React from "react";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import Router from "next/router";
import { ConnectedRouter } from "connected-next-router";
import { Provider } from "react-redux";
import { configureStore } from "../src/redux/store/store";
import { appWithTranslation } from "../i18n";
import "../static/styles/global.css";
import "../static/styles/empty.css";
import "../static/styles/keyframes.css";

const store = configureStore();

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps({ ctx });
		}

		return { pageProps };
	}

	constructor() {
		super();

		this.state = {
			isLoading: false,
		};

		Router.events.on("routeChangeStart", this.routeChangeStart);

		Router.events.on("routeChangeComplete", this.routeChangeComplete);
	}

	routeChangeStart = () => {
		console.log("routeChangeStart");

		this.setState({ isLoading: true });
	};

	routeChangeComplete = () => {
		console.log("routeChangeComplete");

		this.setState({ isLoading: false });
	};

	render() {
		const { Component: Application, pageProps, store } = this.props;
		const { isLoading } = this.state;

		return (
			<Provider store={store}>
				<ConnectedRouter>
					<Application {...pageProps} isLoading={isLoading} />
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default withRedux(configureStore)(
	withReduxSaga(appWithTranslation(MyApp))
);
