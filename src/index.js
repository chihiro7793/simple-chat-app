import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from "react-router-dom"
import conversationReducer from './reducers/conversationReducer';
import applicationReducer from './reducers/applicationReducer';

const rootReducer = combineReducers({ conversationReducer, applicationReducer })
const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
