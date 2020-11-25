import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import conversationReducer from './reducers/conversationReducer';
import applicationReducer from './reducers/applicationReducer';

const rootReducer = combineReducers({ conversationReducer, applicationReducer })
const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
