 
 
 import ResturentCard from "./ResturentCard";
 import resItems from "../Utils/MockData";
 import { useState } from "react";
 import resItems from "../Utils/MockData";

 const Body = () => {

const [ListOfResturent, setListOfResturent] = useState(resItems)


  return(
   <div className="body">
       <div className="filter">
           <button className="filter-btn" 
              onClick={() =>
              {const filter = ListOfResturent.filter((res) => res.card.card.info.avgRating > 4);
                setListOfResturent(filter)
            }}
             >Top Reated Restaurants</button>
     </div>
    <div className="res-container">
         { ListOfResturent.map(resturent=>
         (<ResturentCard key={resturent.card.card.info.id} resData={resturent}/>))}                    
    </div>
    </div>
      )};

        export default Body;