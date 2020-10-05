import React from "react";
import "./topContainer.css";

const TopContainer = () => {
  return (
    <div className="main_container">
      <div className="top">
        <h1>Album Example</h1>
        <p>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <button className="button1">Main call </button>
        <button className="button2">Secondary call </button>
      </div>
    </div>
  );
};

export default TopContainer;
