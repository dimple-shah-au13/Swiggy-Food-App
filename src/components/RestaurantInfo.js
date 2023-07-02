import React from "react";
import { IMG_CON_URL } from "../../constants.js";


const RestaurantInfo = (restaurant) => {

    return (
        <>
<div>
    { 
      <>
      {/* <h1>Restaurant id: {restaurant.resId}</h1> */}
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CON_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name} />
      <h2>{restaurant?.cuisines?.join(",")}</h2>
      <h3>{restaurant.areaName}</h3>
      <h3>{restaurant?.city}</h3>
      <h3>{restaurant?.avgRating} stars</h3>
      {/* <h3>{restaurant?.sla.slaString}</h3> */}
      <h3>{restaurant?.costForTwoMsg}</h3>
      </>
    
      }
</div>
      </>
    )
};

export default RestaurantInfo;