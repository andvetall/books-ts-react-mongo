import { RootState } from "../rootReducer";
import { RegisterState } from "./types";

export const initialState: RegisterState = {
  login: "",
  email: "",
  password: "",
  message: "",
  isRegistred: false,
};

export function registerReducer(state: RegisterState = initialState, action: any) {
  switch (action.type) {
    case `@@register/DO_REGISTER`: {
      return {
        ...state,
      };
    }
    case `@@register/REGISTER_FAILED`: {
      const { message} = action.payload;
      return {
        ...state,
        message
      };
    }

    case `@@register/REGISTER_SUCCESS`: {
      const { email, password, message } = action.payload;
      return {
        ...state,
        isRegistred: true,
        email: email,
        password: password,
        message: message
      };
    }

    default:
      return state;
  }
}

export const register = (state: RootState) => state.register;
