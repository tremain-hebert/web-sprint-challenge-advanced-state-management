import axios from 'axios';

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_ERROR = 'FETCHING_SMURF_ERROR';

export const getSmurfs = () => (dispatch) => {
    console.log("getSmurf action");
    dispatch({ type: FETCHING_SMURF_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then((res) => {
            dispatch({
            type: FETCHING_SMURF_SUCCESS,
            payload: res.data});
        console.log("API RES", res)
        })
        .catch((err) => {
            dispatch({
                type: FETCHING_SMURF_ERROR,
                payload: `${err}`});
            console.log(err);
        });
};
