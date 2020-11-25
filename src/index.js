import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux'
import { createStore, combineReducers } from "redux";
import conversationReducer from './reducers/conversationReducer'
import applicationReducer from './reducers/applicationReducer'

const rootReducer = combineReducers({ conversationReducer, applicationReducer })
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
