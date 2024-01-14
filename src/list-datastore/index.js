import { createReduxStore, register } from '@wordpress/data';

const DEFAULT_STATE = {
	items: [
		{
			"userId": 1,
			"id": 1,
			"title": "delectus aut autem",
			"completed": false
		  },
		  {
			"userId": 1,
			"id": 2,
			"title": "quis ut nam facilis et officia qui",
			"completed": false
		  },
		  {
			"userId": 1,
			"id": 3,
			"title": "fugiat veniam minus",
			"completed": false
		  },
	],
};

const store = createReduxStore('blocks-todo/datastore', {
	// reducer will run if any action is dispatched
	// Never mutuate the state, always return new state object.
	reducer(state= DEFAULT_STATE , action) {
		switch (action.type) {
			case 'ADD_TODO':
				return { ...state, items: [...state.items, action.todo] };
			default:
				return state;
		}
	},
	actions: {
		// Action creator.
		addTodo(todo) {
			// return action ( which is actually an object ).
			return {
				type: 'ADD_TODO',
				todo,  
			}
		}
	},
	selectors: {
		getTodos(state) {
			return state.items;
		}
	},
});

register(store);