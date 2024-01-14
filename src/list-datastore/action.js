import { ADD_TODO } from "./types" 

// Action creators.
export const addTodo = (todo) => {
    // return action ( an object ).
    return {
        type: ADD_TODO,
        todo,  
    }
}