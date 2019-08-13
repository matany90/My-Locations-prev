import { FETCH_LOCATIONS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_LOCATIONS:
            return {...state, locations: action.payload };
        default:
            return state;    

    }
}