const HeartButton = ({ like, setLike, favoritesToggle, buttonValue }) => {
  return (
    <div>
      <button
        className="heartButton"
        onClick={() => setLike((prevLike) => !prevLike)}
      >
        {buttonValue}
      </button>
    </div>
  );
};
export default HeartButton;
{
  /* Add to Favourites: {like ? "❤️" : "🤍"} */
}
