import * as types from './action_types';

export const addTodo = function(text, completed) {
    return {
        type: types.ADD_TODO,
        text,
        completed
    };
};

export const toggleTodo = function(index) {
    return {
        type: types.TOGGLE_TODO,
        index
    };
};

export const setVisibilityFilter = function(filter) {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    };
};

export const VISIBILITY_FILTERS = {
    SHOW_ALL: 'all',
    SHOW_ACTIVE: 'active',
    SHOW_COMPLETED: 'completed'
};

export const selectReddit = function(reddit) {
    return {
        type: types.SELECT_REDDIT,
        reddit
    };
};

export const invalidateReddit = function(reddit) {
    return {
        type: types.INVALIDATE_REDDIT,
        reddit
    };
};

export const requestPosts = function(reddit) {
    return {
        type: types.REQUEST_POSTS,
        reddit
    };
};

export const receivePosts = function(reddit, json) {
    return {
        type: types.RECEIVE_POSTS,
        reddit,
        posts: json.data.children.map(child => child.data),
        receiveAt: Date.now()
    };
};