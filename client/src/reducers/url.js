import {GENERATE_URL, SET_LOADING} from '../actions/url';

const defaultState = {
	last: undefined,
	isLoading: false,
}

export default (state = defaultState, action) => {
	switch(action.type){
		case GENERATE_URL:
			return {				
				last: action.payload,
				isLoading: false
			};
		case SET_LOADING:
			return {
				...state, 
				isLoading: action.payload
			};
		default:
			return state;
	}
}