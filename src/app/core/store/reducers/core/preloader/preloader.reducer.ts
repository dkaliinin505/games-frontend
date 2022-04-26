import {createReducer, on} from "@ngrx/store";
import {
  hidePreloader,
  showPreloader
} from "@members/core/store/actions/core/preloader/preloader.action";

const initialState = false;

const _preloaderReducer = createReducer(initialState,
  on(showPreloader, (state: boolean) => true),
  on(hidePreloader, (state: boolean) => false),
);

export function preloaderReducer(state: any, action: any) {
  return _preloaderReducer(state, action);
}
