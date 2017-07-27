export default function  getWeatherDataSet(state = [], action){
    if (action.type === 'getdata') {
        return action.newstate
    }
    return state;
};

