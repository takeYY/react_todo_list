import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos : TodoStore.getAll(),
            todo_list : "type this!!"
        }
    }

    componentDidMount() {
        /*
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAll()
            })
        })
        // */
        TodoStore.on("change", this.getTodos);
    }

    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos);
    }
    
    getTodos() {
        this.setState({
            todos: TodoStore.getAll()
        })
    }

    addTodos(text){
        TodoActions.createTodo(text);
    }

    reloadTodos() {
        TodoActions.reloadTodos();
    }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>;
        })
        console.log(this.state.todo_list);

        return (
            <div>
                <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        )
    }
}