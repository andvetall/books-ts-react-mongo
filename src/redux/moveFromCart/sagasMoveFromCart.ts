import { put, takeEvery, call } from "redux-saga/effects";
import request from './request'
import { yieldExpression } from "@babel/types";

export function* moveFromCart(): IterableIterator<any> {
  yield takeEvery(`MOVE_FROM_CART`, function*(action: any) {
    try {
    const id = action.id
      let arr = Object.values(JSON.parse(localStorage.getItem("state") as any).addToCart.selectedBooks)
      let checkId :any = (arr.find((item:any) => item.id == id))
      checkId.quantity -= 1
      
     
    yield put({
      type: `MOVE_FROM_CART_SUCCESS`,
      payload: {
        selectedBooks: arr,
      }
    });
      
    } catch (error) {
      yield put({
        type: `MOVE_FROM_CART_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}
