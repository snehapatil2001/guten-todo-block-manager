import { ADD_TODO, POPULAR_TODOS } from "./types"

// Action creators.
export const addTodo = (todo) => {
    // return action ( an object ).
    return {
        type: ADD_TODO,
        todo,  
    }
}

export const populateTodos = (todos) => {
    return {
        type: POPULATE_TODOS,
        todos,
    }
}