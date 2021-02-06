import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import TodoAdd from '../todoAdd/TodoAdd';
import "./TodoApp.css"

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "todos": [
                {
                    "todoDescr": "Todo1",
                    "todoId": 1,
                    "todoDone": false
                },
                {
                    "todoDescr": "Todo2",
                    "todoId": 2,
                    "todoDone": true
                },
                {
                    "todoDescr": "Todo3",
                    "todoId": 3,
                    "todoDone": false
                },
                {
                    "todoDescr": "Todo4",
                    "todoId": 4,
                    "todoDone": false
                },
            ],
            
        };
    }

    deleteTodo(id) {
        this.setState(state => ({
            todos: state.todos.filter((todo) => todo.todoId !== id)
        }));
    }

    doneTodo(id) {
        const index = this.state.todos.map(todo => todo.todoId).indexOf(id);
        this.setState(state => {
            let { todos } = state;
            todos[index].todoDone = true;
            return todos;
        });
    }

    createTodo(id, todoDescr) {
        let newTodos = this.state.todos;
        newTodos.push({
            "todoDescr": todoDescr,
            "todoId": id,
            "todoDone": false
        });
        this.setState(state => ({
            todos: newTodos
        }));
    }

    
    render() {
        const { todos } = this.state;

        return(
            <div className="Todo-app">
                <div className="container">
                    <div className="Todo-app__wrapper">
                        <div className="Todo-app__box">
                            <div className="Todo-app__list">
                                {
                                    todos.map(todo => (
                                        <TodoItem deleteTodo={this.deleteTodo.bind(this, todo.todoId)} doneTodo={this.doneTodo.bind(this, todo.todoId)} todo={ todo } key={ todo.todoId }/>
                                    ))
                                }
                            </div>
                            <TodoAdd createTodo={this.createTodo.bind(this)} id={todos.length ? todos[todos.length-1].todoId + 1 : 0}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoApp;