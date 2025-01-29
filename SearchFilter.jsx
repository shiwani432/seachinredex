import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "./redux/searchSlice";

const SearchFilter = () => {
 
  const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

  // Access search term from Redux store
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();

  //  search input change
  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  // Filter the items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())//big and small dono ke liye
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Search Filter with Redux</h2>

     
      <input
        type="text"
        placeholder="Search for a fruit..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          padding: "8px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />

      {/* Display in map f. */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
