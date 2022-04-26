import {createAction} from "@ngrx/store";

export enum PreloaderActions {
  showPreloader = "[Preloader] Show",
  hidePreloader = "[Preloader] Hide"
}

export const showPreloader = createAction(PreloaderActions.showPreloader);
export const hidePreloader = createAction(PreloaderActions.hidePreloader);
