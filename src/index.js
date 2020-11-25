import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux'
import { createStore, combineReducers } from "redux";
import conversationReducer from './reducers/conversationReducer'
import searchReducer from './reducers/searchReducer'

const rootReducer = combineReducers({ conversationReducer, searchReducer })
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
