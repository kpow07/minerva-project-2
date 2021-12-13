// import React, { useState, useEffect } from "react";
const HeartButton = ({ like, setLike, favoritesToggle }) => {
  return (
    <div>
      <button
        className="heartButton"
        onClick={() => favoritesToggle}
        // onClick={() => setLike((prevLike) => !prevLike)}
      >
        Add to Favourites: {like ? "❤️" : "🤍"}
      </button>
    </div>
  );
};
export default HeartButton;
