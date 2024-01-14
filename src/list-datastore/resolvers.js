import { fetchTodos } from "./controls";
import { populateTodos } from "./action";

// Here we will define side effects like api requests that can run whenever we run a selector.
// With same function name as from selectors.
// Generative functions
export function* getTodos() {
    const todos = yield fetchTodos();
    console.log(todos);
    return populateTodos(todos);
}