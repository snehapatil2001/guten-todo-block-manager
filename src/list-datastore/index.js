import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './action';
import * as resolvers from './resolvers';
import controls from './controls';

const store = createReduxStore('blocks-todo/datastore', {
	reducer,
	selectors,
	actions,
	// selectors should not have any side effects. so we will use resolvers
	resolvers,
	controls
});

register(store);