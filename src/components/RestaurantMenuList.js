//import { Suspense } from "react";
import RestaurantItemCategory from "./RestaurantItemCategory.js";
import RestaurantNestedItemCategory from "./RestaurantItemCategory.js";
//import MenuItem from "./MenuItem.js";

const RestaurantMenuList = ({menu}) => {

    return (
        <>
        <div>
        {menu?.map((item,index) => (
            <div key={index}>
                {item.categories ? (
                    <RestaurantNestedItemCategory nestedCategory={item} /> 
                ): (
                    <RestaurantItemCategory itemCategory={item} />
                )}

            </div>
        ))}
        </div>

        <div>
        <h1>Menu</h1>
   <ul>

        {/* {Object.values(item?.card?.card).map((item)=> (
           <li key={item.id}>{item.name}</li>
        ))} */}
        {/* {Object.values(res_data.data?.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards).map((item) => (
            <li key={item.id}>{item.name}</li>
        ))} */}
        {/* {Object.values(modifiedData?.info).map((item) => (
             <li key={item.id}>{item.name}</li>
        ))} */}
           {/* {Object.values(menu?.items).map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
            {Object.keys(menu?.items).length} ITEMS */}
              {/* {menu.items.map((item) => (
            <MenuItem key={item.id} item={item.card.info} />
          ))} */}


   </ul>
        </div>

        
        </>
    )

}

export default RestaurantMenuList;