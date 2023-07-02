import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantNestedItemCategory = () => {
    return (
        <>
        <h3>{nestedCategory.title} </h3>

        <div>
          {nestedCategory.categories.map((category, index) => (
            <div key={index}>
              <RestaurantItemCategory itemCategory={category} />
            </div>
          ))}
        </div>
        </>
    )
};

export default RestaurantNestedItemCategory;