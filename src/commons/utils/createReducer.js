import { combineReducers } from "redux";
// import {
//   reducer as messageReducer,
//   reducerName as messageReducerName,
// } from "modules/messageCenter";
// import {
//   reducer as authReducer,
//   reducerName as authReducerName,
// } from "modules/auth";
import { pendingTasksReducer } from "react-redux-spinner";

export default function createReducer(asyncReducers) {
	const reducers = {};
	//   reducers[messageReducerName] = messageReducer;
	//   reducers[authReducerName] = authReducer;

	reducers.pendingTasks = pendingTasksReducer;
	return combineReducers(Object.assign({}, reducers, asyncReducers));
}
