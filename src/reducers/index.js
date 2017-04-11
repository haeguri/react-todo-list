import { combineReducers } from 'redux';
import { visibilityFilter } from './filter';
import { todos } from './todos';

const reducers = combineReducers({
    visibilityFilter,todos
});

export default reducers;