import {LOCATION_TEXT_CHANGED, ADDRESS_TEXT_CHANGED, CATEGORY_SLIDER_CHANGED,
     FETCH_LOCATIONS, ADD_LOCATION } from '../actions/types';

 export const fetchLocations = ()  => {
    let locations = localStorage.getItem('locations');
    locations = locations ? JSON.parse(locations) : {};

    return { type: FETCH_LOCATIONS, payload: locations };
}

export const addLocation = (name, address, category, callback) => dispatch => {
    let locations = localStorage.getItem('locations');
    locations = locations ? JSON.parse(locations) : {};
    locations[name] = { name, address, category };
    localStorage.setItem('locations', JSON.stringify(locations));

    dispatch({ type: ADD_LOCATION, payload: locations});
    callback();
}

export const onLoctionTextChanged = (text) => {
    return {
        type: LOCATION_TEXT_CHANGED, payload: text
    };
}

export const onAddressTextChanged = (text) => {
    return {
        type: ADDRESS_TEXT_CHANGED, payload: text
    };
}

export const onCategorySliderChanged = (text) => {
    return {
        type: CATEGORY_SLIDER_CHANGED, payload: text
    };
}