import { AnyAction } from 'redux'
import createSagaMiddleware from 'redux-saga' //core
import { call, put, takeLatest, takeLeading } from 'redux-saga/effects'
import { showFetched, SHOW_FETCH } from './actions'
import { getShows } from './api'


export const sagaMiddeleware= createSagaMiddleware()

export function* fetchShowSaga(action:AnyAction):Generator<any,any,any>{
    console.log("action",action.payload)
    const data= yield call(getShows,action.payload);
    yield put(showFetched(data));

}

export function* rootSaga(){
    yield takeLatest(SHOW_FETCH,fetchShowSaga);
}

