

export enum RegisterActions {
  DO_REGISTER = "DO_REGISTER",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAILED = "REGISTER_FAILED"
}

export interface RegisterState {
  login: string;
  email: string;
  password: string;
  message: string;
  isRegistred: boolean
}

export interface DoRegisterProps {
  email: string;
  password: string;
  payloadFunc: Function;
}
export interface RegisterRequest {
  login: string;
  email: string;
  password: string;
}

export interface RegisterResult {
  token: string;
}
