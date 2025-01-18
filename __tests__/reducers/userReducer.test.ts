import userReducer from '../../store/reducers/userReducer';
import { setUsers, setSearchedUser, setError } from '../../store/actions/userActions';
import { User } from '../../store/types';

describe('userReducer', () => {
  const initialState = {
    users: [],
    searchedUser: null,
    error: null,
  };

  it('should return the initial state when no action is provided', () => {
    const state = userReducer(undefined, {} as any); // Simulate no action
    expect(state).toEqual(initialState);
  });

  it('should handle SET_USERS', () => {
    const users: User[] = [
      { name: 'Rica Ella Francisco', bananas: 200 },
      { name: 'Adh Fuoo', bananas: 0 },
    ];
    const action = setUsers(users);
    const state = userReducer(initialState, action);

    expect(state.users).toEqual(users);
    expect(state.searchedUser).toBeNull();
    expect(state.error).toBeNull();
  });

  it('should handle SET_SEARCHED_USER with a valid user', () => {
    const user: User = { name: 'John', bananas: 100 };
    const action = setSearchedUser(user);
    const state = userReducer(initialState, action);

    expect(state.searchedUser).toEqual(user);
    expect(state.users).toEqual([]);
    expect(state.error).toBeNull();
  });

  it('should handle SET_SEARCHED_USER with null', () => {
    const action = setSearchedUser(null);
    const state = userReducer(initialState, action);

    expect(state.searchedUser).toBeNull();
    expect(state.users).toEqual([]);
    expect(state.error).toBeNull();
  });

  it('should handle SET_ERROR', () => {
    const error = 'User not found';
    const action = setError(error);
    const state = userReducer(initialState, action);

    expect(state.error).toEqual(error);
    expect(state.users).toEqual([]);
    expect(state.searchedUser).toBeNull();
  });

  it('should return the initial state for unknown action types', () => {
    const action = { type: 'UNKNOWN_ACTION' } as any; // Simulate an unknown action
    const state = userReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});