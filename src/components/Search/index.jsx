import React from "react";

function Search(props) {
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="searchField"
          value={props.search}
          onChange={props.handleInputChange}
        />
        <button
          onClick={() => props.handleFormSubmit()}
          className="btn"
          type="submit"
        >
          Search
        </button>
      </form>
      {props.children}
    </div>
  );
}

export default Search;
