import { AnyAction } from 'redux'
import createSagaMiddleware from 'redux-saga' //core
import { call, delay, put, takeLatest, takeLeading } from 'redux-saga/effects'
import { showFetched, SHOW_FETCH } from './actions'
import { getShows } from './api'


export const sagaMiddeleware= createSagaMiddleware()

export function* fetchShowSaga(action:AnyAction):Generator<any,any,any>{
   yield  delay(500);
     if(!action.payload){
         return
     };
     const  query=action.payload
    const data= yield call(getShows,query);
    yield put(showFetched(query,data));

}

export function* rootSaga(){
    yield takeLatest(SHOW_FETCH,fetchShowSaga);
}

