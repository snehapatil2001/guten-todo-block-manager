import { ADD_TODO } from "./types"

const DEFAULT_STATE = {
	items: [],
};
// reducer will run if any action is dispatched
// Never mutuate the state, always return new state object.
const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, items: [...state.items, action.todo] };
        default:
            return state;
    }
}

export default reducer;