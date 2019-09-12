import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "./rootReducer";
import { doRegister } from "./registration/sagasRegister";

import { all } from "redux-saga/effects";
import { doLogin } from "./login/sagasLogin";

import { loadState, saveState } from './localStorage'
import { addToCart, moveFromCart } from "./addToCart/sagasAddToCart";
import { showBooks, updateBook, addBook, moveBook } from "./showBooks/sagasShowBooks";
import { showUsers, moveUser, updateUser } from "./showUsers/sagasShowUsers";



export default function configureStore(
  initialState?: RootState
): Store<RootState> {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const composeEnhancers = composeWithDevTools({});

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState, enhancer);
  store.subscribe(() => {
    saveState({
      login: store.getState().login,
      addToCart: store.getState().addToCart
    });
  });

  


  sagaMiddleware.run(function* () {
    yield all([
      doRegister(),
      doLogin(),
      addToCart(),
      moveFromCart(),
      showBooks(),
      updateBook(),
      addBook(),
      moveBook(),
      showUsers(),
      moveUser(),
      updateUser()
    ]);
  });

  return store;
}
