import React, { useState } from "react";

const HeartButton = () => {
  const [like, setLike] = useState(false);
  return (
    <div>
      <button
        className="heartButton"
        onClick={() => setLike((prevLike) => !prevLike)}
      >
        Add to Favourites: {like ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default HeartButton;
