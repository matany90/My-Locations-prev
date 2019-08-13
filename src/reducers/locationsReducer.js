import { FETCH_LOCATIONS, LOCATION_TEXT_CHANGED,
     ADDRESS_TEXT_CHANGED, CATEGORY_SLIDER_CHANGED, ADD_LOCATION } from '../actions/types';

const INITIAL_STATE = {locations: {}, locationName: '', addressName: '',
         categoryNameChoosed: '', }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOCATIONS:
            return {...state, locations: action.payload };
        case LOCATION_TEXT_CHANGED:
            return {...state, locationName: action.payload }
        case ADDRESS_TEXT_CHANGED:
            return {...state, addressName: action.payload }   
        case CATEGORY_SLIDER_CHANGED: 
            return {...state, categoryNameChoosed: action.payload } 
        case ADD_LOCATION:
            return {...state, locationName: '', addressName: '', categoryNameChoosed: '', locations: action.payload}       
        default:
            return state;    

    }
}