import React from "react";

function Search(props) {
  return (
    <div>
      <form className="text-center p-3">
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
