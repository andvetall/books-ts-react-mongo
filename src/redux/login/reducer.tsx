import { RootState } from "../rootReducer";
import { LoginState } from "./types";
import { any } from "prop-types";

export const initialState: LoginState = {
  data: {},
  message: ''
};

export function loginReducer(state: LoginState = initialState, action: any) {
  switch (action.type) {
    case `@@login/DO_LOGIN`: {
      return {
        ...state,
      };
    }
    case `@@login/LOGIN_FAILED`: {
      const { message } = action.payload;
      return {
        ...state,
        message: message
      };
    }

    case `@@login/LOGIN_SUCCESS`: {
      const { data } = action.payload;
      return {
        ...state,
        data: data,
        isLoggedIn: true
      };
    }

    

    default:
      return state;
  }
}

export const login = (state: RootState) => state.login;
