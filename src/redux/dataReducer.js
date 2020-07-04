import { ADD_NEW_USER, SET_FILTER, SORT_USERS, REMOVE_USER } from './types';

const initialState = {
	usersToShow: [],
	currentFilter: '',
	reversedSort: false
}

export function dataReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_USER:
			return {...state, usersToShow: [...state.usersToShow, action.newUser]}
		case SET_FILTER:
			var reversedSort = (state.currentFilter === action.currentFilter) ? !state.reversedSort : false;
			return {...state, currentFilter: action.currentFilter, reversedSort: reversedSort}
		case SORT_USERS:
			return {...state, usersToShow: state.usersToShow.slice().sort((a, b) => {
				  var user_1 = typeof a[state.currentFilter] === 'string' ? a[state.currentFilter].toLowerCase() : a[state.currentFilter];
				  var user_2 = typeof b[state.currentFilter] === 'string' ? b[state.currentFilter].toLowerCase() : b[state.currentFilter];
				  if(state.reversedSort === false) {
				  	return user_1 < user_2 ? -1 : user_2 > user_1 ? 1 : 0;
				  }	 else {
				  	return user_1 > user_2 ? -1 : user_2 < user_1 ? 1 : 0;
				  }
			})}
		case REMOVE_USER:
			return {...state, usersToShow: state.usersToShow.filter(user => user.id !== action.userId)}
		default: return state
	}
};