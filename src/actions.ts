export const SHOW_FETCH="show fetch";
export const SHOW_FETCHED="show fetched";



export const showFetch=()=>({
    type:SHOW_FETCH,
});
 
export const showFetched=(shows:any[])=>({
    type:SHOW_FETCHED,
    payload:shows
})