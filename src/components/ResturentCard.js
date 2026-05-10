

import { CDN_URL } from "../Utils/contents";
import StyleCard from "./StyleCard";

const ResturentCard = ({ resData }) => {

  const {
    cloudinaryImageId,
    name,
    locality,
    cuisines,
    avgRating,
    costForTwo,
  } = resData;

  return (
    <div className="res-card" style={StyleCard}>

      <img
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-img"
      />

      <h3>{name}</h3>

      <h4>{locality}</h4>

      <h4>{cuisines?.join(", ")}</h4>

      <h4>{avgRating}</h4>

      <h4>{costForTwo}</h4>

    </div>
  );
};

export default ResturentCard;