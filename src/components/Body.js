import { restaurantList } from "../../constants.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper.js";
import useOnline from "../utils/useOnline.js";
import { GET_RESTAURANTS_LIST } from "../../constants.js";



const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        //API call
        getRestaurants()
    }, []);

async function getRestaurants() {
    const response = await fetch(GET_RESTAURANTS_LIST);
    const res_data = await response.json();
    //console.log(res_data)
    //optional chaining
    setAllRestaurants(res_data?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(res_data?.data?.cards[2]?.data?.data?.cards)

}

//const offLine = true;      // hard coding to make offline
const isOnline = useOnline();

if (!isOnline) {
    return <h1> 🔴 OffLine , Please Check Your Internet  !!</h1>
}

console.log("render");

// not render component(Early return) so UI wont break
if (!allRestaurants) return null;

// if(filteredRestaurants?.length === 0)
// return <h1>No Restaurants matched your Filter !!! </h1>;

return allRestaurants?.length === 0 ? (
    <Shimmer />
) :  (
      <>
       <div className="search-container p-5 bg-pink-50 my-4">
        <input 
        type="text" 
        className="focus:bg-green-300 p-2 m-2"
        placeholder="Search" 
        value={searchText} 
        onChange={(e) => {
            setSearchText(e.target.value)
        }}/>
        <button className="p-2 m-2 bg-purple-900 hover:bg-orange-600 text-white rounded-md"
        onClick={() => {
            //need to filter the restaurant data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);

        }}
        
        >Search</button>


       </div>
        <div className="flex flex-wrap">
       {filteredRestaurants.map((restaurant) => {
                return (
            <Link to= {"/restaurant/" + restaurant.data.id } key={restaurant.data.id}>
                {/* <RestaurantCard {...restaurant.data}  /> */}
                <RestaurantCard props={restaurant} key={restaurant.data.id}   />

                </Link>
                )
            })}
        </div>

        </>
        )
    }



export default Body;