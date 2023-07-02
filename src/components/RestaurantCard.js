import { IMG_CON_URL } from "../../constants.js";


const RestaurantCard = ({props}) => {
    const {name, cuisines, cloudinaryImageId, avgRating, slaString, costForTwoString} = props.data;

    const markFavourite = (e) => {
        setRestaurants(props)
        e.preventDefault();

    }

    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50" >
            <div onClick={(e) => {markFavourite(e)}} >&#x2764;
            </div>
           <img src={IMG_CON_URL + cloudinaryImageId} alt={name} />
            <h2>{name}</h2>
           <h3>{cuisines.join( ", ")} </h3>
           <h2>{avgRating}</h2>
           <h2>{slaString}</h2>
           <h2>{costForTwoString}</h2>
           {/* <h4>{totalRatingsString} </h4> */}

        </div>
    )
}

export default RestaurantCard;