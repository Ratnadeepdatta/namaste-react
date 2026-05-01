 const ResturentCard = (props) => {
            const {resData } = props;

            const {cloudinaryImageId, name, locality, cuisines, avgRating,costForTwo} = resData?. card.card.info;
            return(
                <div className="res-card" style={StyleCard}>
                    <img src={CDN_URL + cloudinaryImageId }/>
                    <h3>{name}</h3>
                    <h4>{locality}</h4>
                    <h4>{cuisines.join(" , ")}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                </div>
            )
        };

        export default ResturentCard;

import { CDN_URL } from "../Utils/contents";
    import StyleCard from "./StyleCard";