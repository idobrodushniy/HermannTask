import fetch from 'isomorphic-fetch';

export default function loadDataSet(dispatch) {
    return (
        fetch(`/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1`,
            {
                method: 'get'
            })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                dispatch({type: 'getdata', newstate: data.list})
            })
    )
}