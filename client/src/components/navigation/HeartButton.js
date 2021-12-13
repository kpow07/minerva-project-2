import React, { useState, useEffect } from "react";
const HeartButton = ({mentorId, userId}) => {
  const [like, setLike] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  console.log("FROM HEART BUTTON" ,userId)

 useEffect(() => {
   const getUserFavorites = async () => {
     let fetchResult = await fetch(`/api/get-user?userId=${userId}`);
     let fetchedUser = await fetchResult.json();
     setCurrentUser(fetchedUser);
     };
     getUserFavorites();
      }, [userId]);


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
