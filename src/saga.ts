import createSagaMiddleware from 'redux-saga' //core
import { call, put, takeLeading } from 'redux-saga/effects'
import { showFetched, SHOW_FETCH } from './actions'
import { getShows } from './api'


export const sagaMiddeleware= createSagaMiddleware()

export function* fetchShowSaga():Generator<any,any,any>{
    const data= yield call(getShows)
    const action = yield call(showFetched,data)
    yield put(action)
}

export function* rootSaga(){
    console.log(rootSaga)
    yield takeLeading(SHOW_FETCH,fetchShowSaga);
}

