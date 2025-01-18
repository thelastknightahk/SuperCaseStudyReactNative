import { User } from '../types';

export const setUsers = (users: User[]) => ({
  type: 'SET_USERS' as const,
  payload: users,
});

export const setSearchedUser = (user: User | null) => ({
  type: 'SET_SEARCHED_USER' as const,
  payload: user,
});

export const setError = (error: string | null) => ({
  type: 'SET_ERROR' as const,
  payload: error,
});