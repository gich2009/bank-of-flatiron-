import React, { useState } from "react";

function Searchbar({placeholder, onSearchTable}){
  const [searchValue, setSearchValue] = useState("");

  return(
    <div className="search-bar">
      <input  type="text" placeholder={placeholder} value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
      <img src="https://freeiconshop.com/wp-content/uploads/edd/search-solid.png" alt="Search Icon" />
    </div>
  );

}

export default Searchbar;