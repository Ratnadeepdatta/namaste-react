import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
const {resId} = useParams();
console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    
      const data = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9719321&lng=77.512749&restaurantId=1005688&catalog_qa=undefined&query=Burger&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = 
  resInfo?.cards[0]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[2]?.groupdCard?.cardsGroupMap?.REGULER?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (<li key={item.card.info.id}>{item.card.info.name}</li>))}
       
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;



// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {

//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//  const fetchMenu = async () => {

//   try {

//     const response = await fetch(
//       "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9719321&lng=77.512749&restaurantId=1005688&catalog_qa=undefined&query=Burger&submitAction=ENTER"
//     );

//     const text = await response.text();

//     console.log(text);

//     if (!text) {
//       throw new Error("Empty API response");
//     }

//     const json = JSON.parse(text);

//     console.log(json);

//     setResInfo(json?.data);

//   } catch (error) {

//     console.log("API Error:", error);

//   } 
// };

//   // loading shimmer
//   if (resInfo === null) {
//     return <Shimmer />;
//   }

//   // correct path
//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards?.[2]?.card?.card?.info;

//   return (
//     <div className="menu">

//       <h1>{name}</h1>

//       <p>
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </p>

//       <h2>Menu</h2>

//       <ul>
//         <li>Biryani</li>
//         <li>Burger</li>
//         <li>Diet Coke</li>
//       </ul>

//     </div>
//   );
// };

// export default RestaurantMenu;


// // import {useState, useEffect } from "react";
// // import Shimmer from "./Shimmer";

// // const RestaurantMenu = () => {

// //     const [resInfo, setResINfo] = useState (null)


// //   useEffect(() => {
// //     fetchMenu();
// //   }, []);

// //   const fetchMenu = async () => {

// //     try {

// //       const data = await fetch(
// //         "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9719321&lng=77.512749&restaurantId=1005688&catalog_qa=undefined&query=Burger&submitAction=ENTER"
// //       );

// //       // convert response into text first
// //       const json = await data.json();

// //       console.log(json);
// //       setResINfo(json?.data)

// //     } 
// //     catch (error) {

// //       console.log("API Error:", error);

// //     }
// //   };

// // const {name, cuisines, costForTwoMessage} = 
// // resInfo?.cards?.[2]?.card?.card?.info;

// //   return resInfo === null? (<Shimmer/>) :(
// //     <div className="menu">  
// //       <h1>{name}</h1>
// //       <p>
// //         {cuisines.join(", ")} - {costForTwoMessage}
// //       </p>

// //       <h2>Menu</h2>

// //       <ul>
// //         <li>Biryani</li>
// //         <li>Burger</li>
// //         <li>Diet Coke</li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default RestaurantMenu;


// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const response = await fetch(
//         "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9719321&lng=77.512749&restaurantId=1005688&catalog_qa=undefined&query=Burger&submitAction=ENTER"
//       );
//       const json = await response.json();
//       setResInfo(json?.data);
//     } catch (error) {
//       console.log("API Error:", error);
//     }
//   };

//   if (resInfo === null) return <Shimmer />;

//   // Safely find the restaurant info card
//   const restaurantCard = resInfo?.cards?.find(
//     (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
//   );

//   const info = restaurantCard?.card?.card?.info;

//   // Fallback if info is not found
//   if (!info) return <div>Restaurant information currently unavailable.</div>;

//   const { name, cuisines, costForTwoMessage } = info;

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <p>
//         {cuisines?.join(", ")} - {costForTwoMessage}
//       </p>
//       <h2>Menu</h2>
//       <ul>
//         <li>Biryani</li>
//         <li>Burger</li>
//         <li>Diet Coke</li>
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

