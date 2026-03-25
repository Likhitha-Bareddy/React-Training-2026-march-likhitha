// import {createStore, combineReducers} from 'redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'

import { authReducer } from './authReducer';

const reducer = combineReducers({
    auth: authReducer
})
// export const store = createStore(reducer,
//      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = configureStore({reducer, devTools: true});
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;     