import { State } from "./store"

export const showSelector =(s:State)=>s.shows[s.showsQuery] 	|| [];


export const querySelector=(s:State)=> s.showsQuery
