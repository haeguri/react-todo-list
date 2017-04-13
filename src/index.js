import React  from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addTodo, toggleTodo, setVisibilityFilter, VISIBILITY_FILTERS } from './actions/actions';
import reducers from './reducers';
import Root from './components/Root';

let store = createStore(reducers);
/* test */
// let unsubscribe = store.subscribe(() => console.log('state is', store.getState()));
// store.dispatch(addTodo('first todo'));
// store.dispatch(addTodo('second todo'));
// store.dispatch(addTodo('third todo'));
// store.dispatch(toggleTodo(2));
// store.dispatch(setVisibilityFilter(VISIBILITY_FILTERS.SHOW_ALL));
// store.dispatch(setVisibilityFilter(VISIBILITY_FILTERS.SHOW_COMPLETED));
// store.dispatch(setVisibilityFilter(VISIBILITY_FILTERS.SHOW_ACTIVE));
/* test-end */

ReactDOM.render(
    <Root store={store}/>,
  document.getElementById('root')
);
