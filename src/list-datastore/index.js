import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './action';

const store = createReduxStore('blocks-todo/datastore', {
	reducer,
	selectors,
	actions,
});

register(store);