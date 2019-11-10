import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { enableBatching } from "redux-batched-actions";
import { composeWithDevTools } from "redux-devtools-extension";
import { createRouterMiddleware } from "connected-next-router";
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

const bindMiddleware = middleware => {	
	if (process.env.NODE_ENV !== "production") {
		return composeWithDevTools(applyMiddleware(...middleware));
	}

	return applyMiddleware(...middleware);
};

export const configureStore = initialState => {
	const sagaMiddleware = createSagaMiddleware();
	const routerMiddleware = createRouterMiddleware();
	const store = createStore(
		enableBatching(rootReducer),
		initialState,
		bindMiddleware([routerMiddleware, sagaMiddleware])
	);

	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};
