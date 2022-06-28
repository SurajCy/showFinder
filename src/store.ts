
import { composeWithDevTools } from "@redux-devtools/extension";
import {   AnyAction, applyMiddleware, createStore } from "redux";
import { SHOW_FETCH, SHOW_FETCHED } from "./actions";
import { show } from "./models";
import { rootSaga, sagaMiddeleware } from "./saga";

export type State={
    shows: show[]
    showsQuery:string
}

const initialState={
    shows:[],
    showsQuerry:""
}

export const reducer=(state=initialState,action:AnyAction)=>{
    console.log("Reduceraction", action)
switch (action.type){
    case SHOW_FETCH:
        return{...state,showsQuery:action.payload}
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