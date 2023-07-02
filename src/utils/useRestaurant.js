import { FETCH_MENU_URL } from "../../constants.js";
import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
console.log(resId)
    const [restaurant, setRestaurant] = useState(null);

    //get data from API
    useEffect(() => {
        getRestaurantInfo()
      },[]);
  
    
    const getRestaurantInfo = async () =>  {
      try{
        const response = await fetch(FETCH_MENU_URL + resId);
       // console.log(response);
        const res_data = await response.json();
        const menuItemsList = res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
        const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
        //type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle
        // console.log(json.data);  
        // console.log(menuItemsList);
        // console.log(itemCategory);
        // console.log(NestedItemCategory);

        const menu = menuItemsList.map(item => {
          if((item.card.card["@type"] === itemCategory)  || (item.card.card["@type"] === NestedItemCategory)){
            return item.card.card;
          }
        })

        const modifiedData = {
          info: res_data.data.cards[0].card.card.info,
          menu: menu.filter(value => value !== undefined)
        }
        console.log(modifiedData)

        //setMenu(json.data);
        //setrestaurant(json?.data?.cards[0]?.card?.card?.info);
        setRestaurant(modifiedData);
      }catch (error) {
         //console.log(error)
      }
             }

      // return restaurant data
      return restaurant;

}

export default useRestaurant;