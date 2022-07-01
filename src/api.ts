import axios from "axios"
import { AnyAction } from "redux";
import { show } from "./models";

 export const getShows= async(query:string)=>{
   
    
    const response=await axios.get<{score:number,show:show}[]>(
    "https://api.tvmaze.com/search/shows?q=" + query
    );
    console.log()
    return response.data.map((g)=>g.show);
    console.log("response.data", response.data)
   
  
}
