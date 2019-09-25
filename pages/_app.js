// disable lint because of next.js =)
/* eslint-disable */
import App, { Container } from "next/app";
import React from "react";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { Provider } from "react-redux";
import "../static/empty.css";

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

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
