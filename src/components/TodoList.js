import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => (
                    <Todo
                        {...todo}
                        key={index}
                        onTodoClick={() => this.props.onTodoClick(index)}
                    />
                ))}
            </ul>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;