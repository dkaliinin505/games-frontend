import {createAction, props} from '@ngrx/store';
import {UserModel} from "@members/core/models/user.model";

export enum AuthActionsEnum {
  SetAuthUser = "[User] Set Auth User"
}

export const setUser = createAction(AuthActionsEnum.SetAuthUser, props<{user: UserModel|null}>())
