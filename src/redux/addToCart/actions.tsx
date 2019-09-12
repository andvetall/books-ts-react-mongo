
import { AddToCartActions, MoveFromCartActions, } from "./types";


export function addToCart(id:any) {
  return { 
    type: `${AddToCartActions.ADD_TO_CART}`,
    id 
  };
}


export function moveFromCart(id:any) {
  return { 
    type: `${MoveFromCartActions.MOVE_FROM_CART}`,
    id 
  };
}

