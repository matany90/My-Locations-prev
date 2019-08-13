import { ADD_CATEGORY, FETCH_CATEGORIES, CATEGORY_TEXT_CHANGED } from '../actions/types';

export const fetchCategories = ()  => {
    let categories = localStorage.getItem('categories');
    categories = categories ? JSON.parse(categories) : {};

    return { type: FETCH_CATEGORIES, payload: categories };
}

export const addCategory = (categoryToAdd, callback) => dispatch => { 
    let categories = localStorage.getItem('categories');
    categories = categories ? JSON.parse(categories) : {};
    categories[categoryToAdd] = { Name: categoryToAdd };
    localStorage.setItem('categories', JSON.stringify(categories));

    dispatch({ type: ADD_CATEGORY, payload: categories});
    callback();
}

export const onCategoryTextChanged = (text) => {
    return {
        type: CATEGORY_TEXT_CHANGED, payload: text
    }
}