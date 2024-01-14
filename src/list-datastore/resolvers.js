import { fetchTodos } from "./controls";

// Here we will define side effects like api requests that can run whenever we run a selector.
// With same function name as from selectors.
// Generative functions
export function* getTodos() {
    const todos = yield fetchTodos();
    console.log(todos);
}