import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showFetch} from "../actions";
import { showSelector } from "../selectors";
import { State } from "../store";

type ShowsListProps = {
    shows:any[]
    fetchShows: ()=> void 
};

const ShowsList: FC<ShowsListProps> = ({shows,fetchShows}) => {
    useEffect(()=>{
        fetchShows();
    },[])

  return <div>
      {shows.map((s)=>(
          <div key={s.id}>{s.name}</div>
      ))}
  </div>;
};

ShowsList.defaultProps = {};

const mapStateToProps=(s:State)=>({
    shows:showSelector(s)
})
const mapDispatchToProps={
    fetchShows:showFetch
};
console.log(mapDispatchToProps)

    export default connect(mapStateToProps,mapDispatchToProps)(memo(ShowsList));