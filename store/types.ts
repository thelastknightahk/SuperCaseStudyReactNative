export interface User {
    name: string;
    bananas: number; 
    subscribed: boolean,
    stars:number
  }
  
  export interface UserState {
    users: User[];
    searchedUser: User | null;
    error: string | null;
  }
  
  export type UserActionTypes =
    | { type: 'SET_USERS'; payload: User[] }
    | { type: 'SET_SEARCHED_USER'; payload: User | null }
    | { type: 'SET_ERROR'; payload: string | null };