import { RootState } from "../rootReducer";
import { MoveFromCartState } from "./types";

export const initialState: MoveFromCartState = {
  id: 0,
  selectedBooks: [],
  qantity: 1,
};

export function moveFromCartReducer(state: MoveFromCartState = initialState, action: any) {
  switch (action.type) {
    
    case `MOVE_FROM_CART`: {
      return {
        ...state,
        id: state.id
      }
    }

    case `MOVE_FROM_CART_FAILED`: {
      const {} = action.payload;
      return {
        ...state,
      };
    }
    

    case `MOVE_FROM_CART_SUCCESS`: {
      const { id, selectedBooks, qantity  } = action.payload;
      return {
        ...state,
        id: id,
        selectedBooks: selectedBooks,
        qantity: qantity
      };
    }

    default:
      return state;
  }
}

export const addToCart = (state: RootState) => state.addToCart;
