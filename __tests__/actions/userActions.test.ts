import { setUsers, setSearchedUser, setError } from '../../store/actions/userActions';
import { User } from '../../store/types';

describe('userActions', () => {
  it('should create an action to set users', () => {
    const users: User[] = [
      { name: 'John', bananas: 100 },
      { name: 'Jane', bananas: 200 },
    ];
    const expectedAction = {
      type: 'SET_USERS',
      payload: users,
    };
    expect(setUsers(users)).toEqual(expectedAction);
  });

  it('should create an action to set the searched user', () => {
    const user: User = { name: 'John', bananas: 100 };
    const expectedAction = {
      type: 'SET_SEARCHED_USER',
      payload: user,
    };
    expect(setSearchedUser(user)).toEqual(expectedAction);
  });

  it('should create an action to set an error', () => {
    const error = 'User not found';
    const expectedAction = {
      type: 'SET_ERROR',
      payload: error,
    };
    expect(setError(error)).toEqual(expectedAction);
  });
});