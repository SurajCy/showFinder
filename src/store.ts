
import { composeWithDevTools } from "@redux-devtools/extension";
import {   AnyAction, applyMiddleware, createStore } from "redux";
import { SHOW_FETCHED } from "./actions";
import { rootSaga, sagaMiddeleware } from "./saga";

export type State={
    shows: any[]
}

const initialState={
    shows:[]
}

export const reducer=(state=initialState,action:AnyAction)=>{
switch (action.type){
    case SHOW_FETCHED:
        return{...state,shows:action.payload}

    default:
        return state;
}
}

const store= createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddeleware))
    )
    sagaMiddeleware.run(rootSaga);

export default store;