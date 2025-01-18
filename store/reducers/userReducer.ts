import { Reducer } from '@reduxjs/toolkit';
import { UserState, UserActionTypes } from '../types';

const initialState: UserState = {
  users: [],
  searchedUser: null,
  error: null,
};

const userReducer: Reducer<UserState, UserActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SET_SEARCHED_USER':
      return { ...state, searchedUser: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;