import React, { useState } from "react";

const HeartButton = ({mentorId, userId}) => {
  const [like, setLike] = useState(false);

async function addToFavorites (){
  let updatedUser=await fetch(`/api/add-favorite?mentorId=${mentorId}&id=${userId}`)

}



  return (
    <div>
      <button
        className="heartButton"
        onClick={() => setLike((prevLike) => !prevLike), addToFavorites()}
      >
        Add to Favourites: {like ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default HeartButton;
