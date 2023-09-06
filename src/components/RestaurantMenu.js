import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menuItemDetail, setMenuItemDetail] = useState(null);
  useEffect(() => {
    callMenuAPI();
  }, []);
  const { resID } = useParams(); //for get dymanic ID
  const callMenuAPI = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=" +
        resID
    );
    const json = await response.json();
    setMenuItemDetail(json?.data);
    // console.log(menuItemDetail.cards[0].card.card.info);
  };

  if (menuItemDetail == null) return <Shimmer />;
  const { name, areaName, costForTwoMessage, avgRating, cuisines } =
    menuItemDetail.cards[0].card.card.info;

  const { itemCards } =
    menuItemDetail?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <h5>{costForTwoMessage}</h5>
      <h5>Rating {avgRating}</h5>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name + " Rs. " + item?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
