import { FC, memo } from "react";
import { show } from "../models";

type showRowProps = {show:show};

const showRow: FC<showRowProps> = ({show}) => {
  return <div className="flex p-2 mb-2 rounded-md bg-gray-400">
      <div
      className="shrink-0  w-20">
      <img 
      className="w-full"
       src={show.image?.medium}/>
      </div>
      <div className="m-2">
      <h1>{show.name}</h1>
          <p>{show.summary}</p>
      </div>
         
      
  </div>;
};

showRow.defaultProps = {};

export default memo(showRow);