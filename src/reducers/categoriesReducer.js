import { FETCH_CATEGORIES, ADD_CATEGORY, CATEGORY_TEXT_CHANGED } from '../actions/types';

const INITIAL_STATE = {categories: {}, categoryToAdd: ''}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, categories: action.payload };
        case ADD_CATEGORY:
            return { ...state, categoryToAdd: '', categories: action.payload};   
        case CATEGORY_TEXT_CHANGED:
            return {...state, categoryToAdd: action.payload }
        default:
            return state;    

    }
}