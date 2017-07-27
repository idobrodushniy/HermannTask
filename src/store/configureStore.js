import {createStore} from 'redux';
import getWeatherDataSet from '../reducers/getWeatherDataSet';

export default  function configureStore() {
    return (
        createStore(getWeatherDataSet)
    );
}