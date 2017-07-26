import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherTable from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const dataset = (state = [], action) => {
    if (action.type === 'getdata') {
        return  action.newstate
    }
    return state;
}

const store = createStore(dataset)

ReactDOM.render(
    <Provider  store={store}>
        <WeatherTable />
    </Provider>,
    document.getElementById('root')
);
