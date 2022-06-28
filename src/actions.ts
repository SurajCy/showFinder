import { show } from "./models";

export const SHOW_FETCH="show fetch";
export const SHOW_FETCHED="show fetched";



export const showFetch=(query:string)=>(
    {
        type:SHOW_FETCH,
    payload:query
    }
);
 

;
 
export const showFetched=(shows:show[])=>({
    type:SHOW_FETCHED,
    payload:shows
})