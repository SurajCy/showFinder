import axios from "axios"

 export const getShows= async()=>{
     
    const response=await axios.get(
        "https://api.tvmaze.com/search/shows?q=game"
    );
    return response.data.map((g:any)=>g.show)
   
}