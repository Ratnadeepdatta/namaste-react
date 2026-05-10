

import ResturentCard from "./ResturentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [ListOfResturent, setListOfResturent] = useState([]);

  const [filteredRestaurant, setFilteredResturent] = useState([]);

  const [SearchText, setSearchText] = useState("");

  // Whenever state variable is update, react triggers a reconciliation cycle (re-render the component);
  console.log("body re render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9719321&lng=77.512749&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    console.log(json);  

    const restaurants = json?.data?.cards
      ?.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      ?.map((item) => item.card.card.info);

    console.log(restaurants);

    setListOfResturent(restaurants);
    setFilteredResturent(restaurants);
  };

  //  Condition Rendaring 
// if(ListOfResturent.length === 0){
//   return <Shimmer />
// }
// Tarnery operetor

  return ListOfResturent.length === 0? (<Shimmer/>) : (
    <div className="body">

      <div className="filter">
      <div className="search">
        <input type="text" 
        className="serch-box" 
        value={SearchText}
        onChange={(e) =>{setSearchText(e.target.value)}}/>
        <button onClick={() => {
          // Filter The Resturent Card adn Update The UI;
          // Search Text; 

          // const finteredResturant = ListOfResturent.filter((res) => res.data.name.includes (SearchText))
          const filteredRestaurant = ListOfResturent.filter((res) =>
  res.name.toLowerCase().includes(SearchText.toLowerCase())
);
setFilteredResturent(filteredRestaurant);
        }}>Search</button>
      </div>
 
        <button
          className="filter-btn"
          onClick={() => {

            const filterData = ListOfResturent.filter(
              (res) => res.avgRating > 4
            );

            setListOfResturent(filterData);
          }}
        >
          Top Rated Restaurants
        </button>

      </div>

      <div className="res-container">

        {filteredRestaurant.map((restaurant) => (
          <ResturentCard
            key={restaurant.id}
            resData={restaurant}
          />
        ))}

      </div>

    </div>
  );
};

export default Body;