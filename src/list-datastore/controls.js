// controls define execution flow behavior associated with a specific type of action.
// controls are another type of actions that are called control actions. So instead of updating the state directly, we will do somehting like sending an api request.

import { FETCH_TODOS, CREATE_TODO, TOGGLE_TODO } from './types';

// control action creators.
export const fetchTodos = () => {
	// return action ( an object ).
	return {
		type: FETCH_TODOS,
	};
};

export const createTodo = (title) => {
	return {
		type: CREATE_TODO,
		title,
	};
};

export const toggleTodo = (todo) => {
	return {
		type: TOGGLE_TODO,
		todo,
	};
};

export default {
	// control functions are the functions that will be called when control actions are dispatched.
	// control functions should return promise.
	FETCH_TODOS() {
		return window
			.fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Could not fetch todos');
			});
	},
	CREATE_TODO({ title }) {
		return window
			.fetch('https://jsonplaceholder.typicode.com/todos', {
				method: 'POST',
				body: JSON.stringify({
					title,
					completed: false,
					userId: 1,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Could not create todo.');
			});
	},
	TOGGLE_TODO({ todo }) {
		return window
			.fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
				method: 'PATCH',
				body: JSON.stringify({
					completed: !todo.completed,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Could not update todo.');
			});
	},
};
