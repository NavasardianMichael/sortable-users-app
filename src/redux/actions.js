import { ADD_NEW_USER, SET_FILTER, SORT_USERS, REMOVE_USER } from './types';

export function addNewUser(newUser) {
	newUser.id = Date.now();
	return {
		type: ADD_NEW_USER,
		newUser
	}
};

export function setFilter(currentFilter) {
	return {
		type: SET_FILTER,
		currentFilter
	}
};

export function sortUsers() {
	return {
		type: SORT_USERS
	}
};

export function removeUser(userId) {
	return {
		type: REMOVE_USER,
		userId
	}
};

export function addNewUserAndSort(newUser) {
	return function(dispatch) {
		dispatch(addNewUser(newUser));
		dispatch(sortUsers());
	}
};

export function setFilterAndSort(currentFilter) {
	return function(dispatch) {
		dispatch(setFilter(currentFilter));
		dispatch(sortUsers());
	}
};