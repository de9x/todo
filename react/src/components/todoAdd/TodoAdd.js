import React from 'react';
import "./TodoAdd.css"

class TodoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "todoInput": ""
        };
    }

    addTodo() {
        if (this.state.todoInput) {
            this.props.createTodo(this.props.id, this.state.todoInput);
            this.setState(state => ({
                todoInput: ""
            }));
        }
    }

    inputChange(event) {
        this.setState(state => ({
            todoInput: event.target.value
        }));
    }

    render() {
        return (
            <div className="Todo-app__add">
                <input value={this.state.todoInput} onChange={this.inputChange.bind(this)} placeholder="Enter TODO..." className="Todo-app__input"></input>
                <button onClick={this.addTodo.bind(this)} className="Todo-app__button">ADD</button>
            </div>
        )
    }
}

export default TodoAdd;