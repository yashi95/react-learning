import RestaurantCard from "./RestaurantCard";
import apiData from "../common/mockData";
import { useState } from "react";

const Body = () => {
  const [restList, setRestList] = useState(apiData);
  const [searchVal, setSearchVal] = useState("");
  return (
    <>
      <div id="restro-search">
        <button
          id="filter-btn"
          onClick={() => {
            filteredDataa = restList.filter((rest) => rest.info.avgRating > 4);
            setRestList(filteredDataa);
          }}
        >
          Top Rated (4+)
        </button>
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
              restname.info.name.toLowerCase().includes(searchVal.toLowerCase())
            );
            setRestList(filteredDataa);
          }}
        >
          Search
        </button>
      </div>
      <div id="restro-container">
        {restList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restList={restaurant} />
        ))}
      </div>
    </>
  );
};
export default Body;
