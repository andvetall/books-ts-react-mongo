import { string } from "prop-types";


export enum MoveFromCartActions{
  MOVE_FROM_CART = "MOVE_FROM_CART",
  MOVE_FROM_CART_SUCCESS = "MOVE_FROM_CART_SUCCESS",
  MOVE_FROM_CART_FAILED = "MOVE_FROM_CART_FAILED"
}

export interface MoveFromCartState {
  id: number,
  selectedBooks: any[],
  qantity: number
}

export interface MoveFromCartProps {
  title: string;
  price: number
  payloadFunc: Function;
}
export interface MoveFromCartRequest {
  title: string;
  price: number
}

export interface MoveFromCartResult {
  token: string;
}
