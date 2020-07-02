import { ADD_NEW_USER, SET_FILTER, SORT_USERS, REMOVE_USER } from './types';

const initialState = {
	usersToShow: [
		{
			id: 6849849,
			firstName: 'michael',
			lastName: 'navasardian',
			email: 'avasardianmichael@gmail.com',
			birthDate: '96684',
			age: 22,
			phoneNumber: '954684',
			gender: 'male'
		},
		{
			id: 2989847,
			firstName: 'ars',
			lastName: 'begl',
			email: 'nardianmichael@gmail.com',
			birthDate: '16684',
			age: 16,
			phoneNumber: '54684',
			gender: 'female'
		}		
	],
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
				  if(typeof a[state.currentFilter] === 'string') a[state.currentFilter] = a[state.currentFilter].toLowerCase();
				  if(typeof b[state.currentFilter] === 'string') b[state.currentFilter] = b[state.currentFilter].toLowerCase();
				  if(state.reversedSort === false) {
				  	return a[state.currentFilter] < b[state.currentFilter] ? -1 : b[state.currentFilter] > a[state.currentFilter] ? 1 : 0;
				  }	 else {
				  	return a[state.currentFilter] > b[state.currentFilter] ? -1 : b[state.currentFilter] < a[state.currentFilter] ? 1 : 0;
				  }
			})}
		case REMOVE_USER:
			return {...state, usersToShow: state.usersToShow.filter(user => user.id !== action.userId)}
		default: return state
	}
};