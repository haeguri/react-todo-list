import * as types from '../actions/action_types';
import { VISIBILITY_FILTERS } from '../actions/actions';

export const visibilityFilter = function(prevState = VISIBILITY_FILTERS.SHOW_ALL, action) {
    if(action.type === types.SET_VISIBILITY_FILTER) {
        return action.filter;
    } else {
        return prevState;
    }
}