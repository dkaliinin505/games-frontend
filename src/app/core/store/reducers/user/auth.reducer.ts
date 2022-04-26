import { createReducer, on } from '@ngrx/store';
import {setUser} from "@members/core/store/actions/user/auth.action";

export const initialState = null;

const _authReducer = createReducer(initialState,
  on(setUser, (state: any, user: any) => {
  return user.user;
}))

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
