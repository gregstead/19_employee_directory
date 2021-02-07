import React from "react";

function Search(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          value={props.search}
          onChange={props.handleInputChange}
        />
        <button
          onClick={(e) => {
            props.handleFormSubmit(e);
          }}
          className="btn"
        >
          Search
        </button>
      </form>
      {props.children}
    </div>
  );
}

export default Search;
