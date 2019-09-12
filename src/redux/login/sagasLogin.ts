import { put, takeEvery, call } from "redux-saga/effects";
import request from './request'
import * as jwt from "jwt-then";


export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function*(action: any) {
    try {
      
      const requestResult = yield call(request, 'POST', action.data);
       if( !requestResult.success ){
        yield put({
          type: `@@login/LOGIN_FAILED`,
          payload: {
            message: requestResult.message
          }
        })
      }else{
        const decoded: any = yield call(jwt.verify, requestResult.token, "secret");
        yield put({
          type: `@@login/LOGIN_SUCCESS`,
          payload: {
            data: decoded,
            message: requestResult.message,

          }
        });
        
      }
    
    } catch (error) {
      yield put({
        type: `@@login/LOGIN_FAILED`
      });
    }
  });
}
