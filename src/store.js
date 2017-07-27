import {createStore} from 'redux';

const dataset = (state = [], action) => {
    if (action.type === 'getdata') {
        return action.newstate
    }
    return state;
}

const store = createStore(dataset)

export default store;