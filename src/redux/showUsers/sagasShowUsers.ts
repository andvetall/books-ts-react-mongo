import { put, takeEvery, call } from "redux-saga/effects";
import request from './request'
import * as jwt from "jwt-then";



export function* showUsers(): IterableIterator<any> {
  yield takeEvery(`SHOW_USERS`, function*(action: any) {
    try {
      
      let users = yield call(request, 'GET', 'users')
      let roles = yield call(request, "GET", "usersInRole")
    yield put({
      type: `SHOW_USERS_SUCCESS`,
      payload: {
        users,
        roles
      }
    });
      
    } catch (error) {
      yield put({
        type: `SHOW_USERS_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

export function* updateUser(): IterableIterator<any> {
  yield takeEvery(`UPDATE_USER`, function*(action: any) {
    try {
      const { id, body } = action
      
      yield call(request, "PUT", `users/${action.id}`, body)
      yield put({
        type: `SHOW_USERS`,
      });
      yield put({
        type: `@@login/LOGIN_SUCCESS`,
        payload: {
          data: body,

        }
      });
    
    } catch (error) {
      yield put({
        type: `UPDATE_USER_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}


export function* moveUser(): IterableIterator<any> {
  yield takeEvery(`MOVE_USER`, function*(action: any) {
    try {
      const { user } = action
      let roles = yield call(request, "GET", `usersInRole`)
      let users = roles.data[0].users
      let usersToUpdate:any =[]
      for(let x in users){
        if(users[x] != action.body) usersToUpdate.push(users[x])
      }
      yield call(request, "DELETE", `usersInRole/${action.body}`, usersToUpdate)
      yield call(request, 'DELETE', `users/${action.body}` )
    yield put({
      type: `SHOW_USERS`,
    });
      
    } catch (error) {
      yield put({
        type: `MOVE_USER_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

