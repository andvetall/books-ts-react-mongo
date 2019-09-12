
import { MoveFromCartActions, MoveFromCartResult, MoveFromCartRequest } from "./types";

// const prefix = "@@login";


export function showBooks(id:any) {
  return { 
    type: `${MoveFromCartActions.MOVE_FROM_CART}`,
    id 
  };
}



