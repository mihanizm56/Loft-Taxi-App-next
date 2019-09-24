import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
// import { rootReducer } from "./root-reducer";
// import { enableBatching } from "redux-batched-actions";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./root-saga";

const bindMiddleware = middleware => {
	if (process.env.NODE_ENV !== "production") {
		return composeWithDevTools(applyMiddleware(...middleware));
	}

	return applyMiddleware(...middleware);
};

export const configureStore = initialState => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		// enableBatching(rootReducer),
		initialState,
		bindMiddleware([sagaMiddleware])
	);

	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};
