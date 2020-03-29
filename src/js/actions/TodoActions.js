import dispatcher from "../dispatcher";

export function createTodo(Text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text : Text
    })
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    })
}

export function reloadTodos() {
    // axios("http://someurl.com/somedataendpoint").then((data) => {
    //   console.log("got the data!", data);
    // });
    
    dispatcher.dispatch({type: "FETCH_TODOS"});
    setTimeout(() => {
        dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
            {
                id: 213464613,
                text: "映画鑑賞",
                complete: false
            },
            {
                id: 335684679,
                text: "Be you dress right",
                complete: true
            },
            {
                id: 131415167,
                text: "Netflix",
                complete: false
            }
        ]})
    }, 1000)
}