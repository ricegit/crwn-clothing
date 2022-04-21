import { AnyAction } from "redux";

import {
  signInFailed,
  signOutFailed,
  signUpFailed,
  signInSuccess,
  signOutSucess,
} from "./user.action";

import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  error: null,
  isLoading: false,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }
  if (signOutSucess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }
  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};
