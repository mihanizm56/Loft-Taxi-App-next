/* eslint-disable */

import App from "next/app";
import React from "react";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import Router from "next/router";
import { ConnectedRouter } from "connected-next-router";
import { Provider } from "react-redux";
import { LoadingSpinner } from "./components/loading-spinner";
import "../static/global.css";
import "../static/empty.css";
import "../static/keyframes.css";

import { configureStore } from "../src/redux/store/store";

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

	routeChangeStart = () => this.setState({ isLoading: true });

	routeChangeComplete = () => this.setState({ isLoading: false });

	render() {
		const { Component: Application, pageProps, store } = this.props;
		const { isLoading } = this.state;

		return (
			<Provider store={store}>
				<ConnectedRouter>
					{isLoading ? <LoadingSpinner /> : <Application {...pageProps} />}
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
