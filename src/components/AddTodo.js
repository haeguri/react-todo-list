import React, { Component, PropTypes } from 'react';

class AddTodo extends Component {

    onButtonClick() {
        let input = this.refs.todoTextInput;
        let text = input.value.trim();

        this.props.onAddClick(text);

        input.value = '';
    }

    render() {
        return(
            <div>
                <input
                    ref="todoTextInput"
                    type="text"
                    placeholder="할 일을 입력하세요."
                />
                <button onClick={() => this.onButtonClick()}>추가하기</button>
            </div>

        )
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default AddTodo;

