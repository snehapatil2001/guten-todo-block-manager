// controls define execution flow behavior associated with a specific type of action.
// controls are another type of actions that are called control actions. So instead of updating the state directly, we will do somehting like sending an api request.

import { FETCH_TODOS } from "./types";

// control action creators.
export const fetchTodos = () => {
    // return action ( an object ).
    return {
        type: FETCH_TODOS,
    }
}

export default {
    // control functions are the functions that will be called when control actions are dispatched.
    // control functions should return promise.
    FETCH_TODOS() {
        return window.fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((response) => response.json());
    },
}