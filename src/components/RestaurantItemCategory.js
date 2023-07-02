import MenuItem from "./MenuItem";


const RestaurantItemCategory = ({ itemCategory }) => {
    //console.log(itemCategory)

    return(
        <>
        <h3>{itemCategory?.title} ({itemCategory?.itemCards?.length}) </h3>
        {itemCategory?.itemCards?.map((item) => (
            <MenuItem key={item.id} item={item.card.info} />
        ))}
        </>
    )
}

export default RestaurantItemCategory;