/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';
import {name as appName} from './app.json';
import React from 'react'
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, applyMiddleware(reduxThunk));

const AppContainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
AppRegistry.registerComponent(appName, () => AppContainer);

