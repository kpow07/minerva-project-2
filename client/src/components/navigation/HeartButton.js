const HeartButton = ({ like, setLike, favoritesToggle, buttonValue }) => {
  return (
    <div>
      <button className="heartButton" onClick={() => favoritesToggle()}>
        Add to Favourites: {like ? "❤️" : "🤍"}
      </button>
    </div>
  );
};
export default HeartButton;
