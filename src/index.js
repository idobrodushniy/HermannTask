import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherTable from './App';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <WeatherTable />
    </Provider>,
    document.getElementById('root')
);
