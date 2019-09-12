import { put, takeEvery, call } from "redux-saga/effects";
import request from './request'


export function* doRegister(): IterableIterator<any> {
  yield takeEvery(`@@register/DO_REGISTER`, function*(action: any) {
    try {
    const {
      data: { login, email, password, passwordComfirm }
    } = action;
    let user = {
          login: login,
          email: email,
          password: password,
          passwordComfirm: passwordComfirm,
          details: {
              email: email,
              address: {
                  country: "No data yet",
                  city: "No data yet",
                  street: "No data yet",
                  house: "No data yet",
                  appartment: "No data yet"
              },
              mobile:"No data yet",
              website: "No data yet",
              userImg: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
          }
    }
    let requestResult = yield call(request, "POST", user)
    
        if(requestResult.success){
          yield put({
            type: `@@register/REGISTER_SUCCESS`,
            payload: {
              email: user.email,
              password: user.password,
              isRegistred: true,
              message: requestResult.message,
              passwordComfirm: passwordComfirm
            }
          });
        }else{
          yield put({
            type: `@@register/REGISTER_FAILED`,
            payload: {
              message: requestResult.message
            }
          });
        }
        
      
      

    } catch (error) {
      yield put({
        type: `@@register/REGISTER_FAILED`,
      });
      
      
    }
  });
}
