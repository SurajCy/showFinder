import { ChangeEvent, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showFetch} from "../actions";
import { show } from "../models";
import { querySelector, showSelector } from "../selectors";
import { State } from "../store";
import ShowRow from "./showRow";

type ShowsListProps = {
    query:string
    shows:show[]
    fetchShows: (query:string)=> void 
};

const ShowsList: FC<ShowsListProps> = ({shows,query,fetchShows}) => {
    
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        fetchShows(event.target.value)
    }
  return <div className="bg-gray-200  p-5">
      <input  className="p-2 m-2 rounded-md border "placeholder="search" value={query} onChange={handleChange
      }/>
    
      <div>
      {shows.map((s)=>(
         <ShowRow  key={s.id} show={s}/>
        

      ))}
    
      </div>
  </div>;
};

ShowsList.defaultProps = {};

const mapStateToProps=(s:State)=>({
    shows:showSelector(s),
    query:querySelector(s)
})
const mapDispatchToProps={
    fetchShows:showFetch
};
console.log(mapDispatchToProps)

    export default connect(mapStateToProps,mapDispatchToProps)(memo(ShowsList));