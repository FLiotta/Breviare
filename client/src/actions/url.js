import axios from 'axios';

export const GENERATE_URL = "GENERATE_URL",
			 SET_LOADING = "SET_LOADING"

export const generateUrl = (url) => {
	return dispatch => {
		dispatch(setLoading(true))

		axios.post('http://localhost:5000/api/generateurl', {url: url})
		.then(res => {
			dispatch({
				type: GENERATE_URL,
				payload: res.data
			})	
		})
	}
}

export const setLoading = cond => dispatch => dispatch({type: SET_LOADING, payload: true});