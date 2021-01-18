import React from "react";

function NotFound(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h2>404 page not found</h2>
      <button
        onClick={() => props.history.push("/")}
        style={{
          margin: "5px",
          backgroundColor: "white",
          width: "100%",
          height: "35px",
          borderRadius: "10px",
          alignSelf: "center",
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default NotFound;
