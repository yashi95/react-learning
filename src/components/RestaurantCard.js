import { CDN_URL } from "../common/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRatingString, cuisines, costForTwo } =
    props.restList.info;
  // console.log(props);
  return (
    <div>
      <div id="card">
        <img id="card-img" alt="cake" src={CDN_URL + cloudinaryImageId} />
        <h4>{name}</h4>
        <h5>{avgRatingString}</h5>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{costForTwo}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
