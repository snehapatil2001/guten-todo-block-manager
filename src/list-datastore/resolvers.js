import { dispatch } from '@wordpress/data';
import { fetchTodos } from './controls';
import { populateTodos } from './actions';

// Here we will define side effects like api requests that can run whenever we run a selector.
// With same function name as from selectors.
// Generative functions
export function* getTodos() {
	try {
		const todos = yield fetchTodos();
		return populateTodos(todos);
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not fetch todos.'
		);
	}
}
