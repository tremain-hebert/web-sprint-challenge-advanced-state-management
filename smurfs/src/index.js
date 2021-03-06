import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from "./components/App";
import SmurfForm from "./components/smurfForm";

const store = createStore(applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
        <SmurfForm />
    </Provider>, document.getElementById("root")
);
