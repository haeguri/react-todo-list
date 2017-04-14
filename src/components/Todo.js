import React, { Component, PropTypes } from 'react';

class Todo extends Component {
    render() {
        let style = {
            textDecoration: this.props.completed ? 'line-through' : 'none'
        };

        return (
            <li style={style}
                onClick={this.props.onTodoClick}>
                {this.props.text}
            </li>
        )
    }
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default Todo;