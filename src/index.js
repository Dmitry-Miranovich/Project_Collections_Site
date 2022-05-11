import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import allReducers from './reducers'
import {Provider} from "react-redux"
import userAccountReducer from "./reducers/userAccountReducer";

const store = createStore(allReducers)
const userStore = createStore(userAccountReducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} userStore = {userStore}>
        <App/>
    </Provider>
);

reportWebVitals();
