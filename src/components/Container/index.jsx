import React from "react"

function Container(props) {
  return (
    <div className="container" style={props.style}>
      <div>{props.children}</div>
    </div>
  );
}

export default Container;
