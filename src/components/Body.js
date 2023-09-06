import RestaurantCard from "./RestaurantCard";
// import apiData from "../common/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGA"
    );
    const jsonData = await apiData.json();
    setRestList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <>
      <div id="restro-search">
        <button
          id="filter-btn"
          onClick={() => {
            filteredDataa = restList.filter(
              (rest) => rest?.info?.avgRating > 4
            );
            setFilteredRestList(filteredDataa);
          }}
        >
          Top Rated (4+)
        </button>
        {/* <select name="rate" id="rate-select">
          <options value=">4">Top Rated 4+</options>
          <option value=""> Please choose an option</option>
          <options value="4">Rated 4</options>
          <options value="<4">Rated below 4</options>
        </select> */}
        <input
          type="search"
          name="searchItem"
          id="searchItem"
          placeholder="   Search for restaurants and food"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button
          id="search-btn"
          onClick={() => {
            let filteredDataa = restList.filter((restname) =>
              restname?.info?.name
                .toLowerCase()
                .includes(searchVal.toLowerCase())
            );
            setFilteredRestList(filteredDataa);
          }}
        >
          Search
        </button>
      </div>
      <div id="restro-container">
        {filteredRestList?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard restList={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;
