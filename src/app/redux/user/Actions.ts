export enum ActionType {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
}

export interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: { username: string; email: string; authToken: string };
}

export interface LoginFailAction {
  type: ActionType.LOGIN_FAIL;
  message: string;
}

export type LoginAction = LoginSuccessAction | LoginFailAction;
