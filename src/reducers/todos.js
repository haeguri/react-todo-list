import * as types from '../actions/action_types';

export const todos = function(prevState = [], action) {
      if(action.type === types.TOGGLE_TODO) {
          return [
              ...prevState.slice(0, action.index),
              {
                  ...prevState[action.index],
                  completed: !prevState[action.index].completed
              },
              ...prevState.slice(action.index+1)
          ];
      } else if(action.type === types.ADD_TODO) {
          return [
              ...prevState,
              {
                  text: action.text,
                  completed: false
              }
          ];
      } else {
          return prevState;
      }
};