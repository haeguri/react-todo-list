import * as types from './action_types';

export const addTodo = function(text, completed) {
    return {
        type: types.ADD_TODO,
        text,
        completed
    }
};

export const toggleTodo = function(index) {
    return {
        type: types.TOGGLE_TODO,
        index
    }
};

export const setVisibilityFilter = function(filter) {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    }
};

export const VISIBILITY_FILTERS = {
    SHOW_ALL: 'all',
    SHOW_ACTIVE: 'active',
    SHOW_COMPLETED: 'completed'
};