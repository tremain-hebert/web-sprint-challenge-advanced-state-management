import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from "./components/App";
import SmurfForm from "./components/smurfForm";
import Smurf from "./components/Smurf";
import { SmurfContext } from "./contexts/SmurfContext";
import { smurfReducer } from './reducers/smurfReducer';

const store = createStore(smurfReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <SmurfContext.Provider value={Smurf}>
            <App />
            <SmurfForm />
            <Smurf />
        </SmurfContext.Provider>
    </Provider>, document.getElementById("root")
);
