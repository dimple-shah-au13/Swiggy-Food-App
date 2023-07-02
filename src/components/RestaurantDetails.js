//import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { IMG_CON_URL } from "/constants.js";
import Shimmer from './Shimmer.js';
import useRestaurant from '../utils/useRestaurant.js';
//import RestaurantCard from './RestaurantCard.js';
import RestaurantInfo from './RestaurantInfo.js';
import RestaurantMenuList from './RestaurantMenuList.js';

const RestaurantDetails = () => {
    // const params = useParams();
    // const { id } = params;
    const { resId } = useParams();
    console.log(resId);

    const restaurant = useRestaurant(resId);  /* Passing resId to Custom Hooks to fetch restaurant details and returns it */


  return !restaurant ? <Shimmer /> : (
    <div className='menu'>
      <div>
      <RestaurantInfo {...restaurant.info}  />
      <RestaurantMenuList menu={restaurant.menu} />

      </div>

{/* 
      <h1>Restaurant id: {resId}</h1>
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CON_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name}/>
      <h3>{restaurant?.areaName}</h3>
      <h3>{restaurant?.city}</h3>
      <h3>{restaurant?.avgRating} stars</h3>
      <h3>{restaurant?.costForTwoMsg}</h3>
      {console.log(restaurant.name)}
      {console.log(restaurant.areaName)}
      {console.log(restaurant.city)}
      {console.log(restaurant.avgRating)} */}

      <div>
        {/* <h1>Menu</h1> */}
        <ul>
        {/* {Object.values(menu?.menu?.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))} */}
          {/* {(menu?.data?.cards?.card?.card?.itemCards).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))} */}
         {/* {console.log((menu?.data?.itemCards[2].card?.card?.info)
         .map((item) => (
          <li key={item.id}>{item.name}</li>
        )))} */}
        </ul>
        {/* {console.log(Object.value(menu?.data?.cards[1].card?.card?.info).map((cards) => (
          <li key={item.id}>{item.name}</li>
        )))} */}
      </div>
        
    </div>
  
  )
}

export default RestaurantDetails;