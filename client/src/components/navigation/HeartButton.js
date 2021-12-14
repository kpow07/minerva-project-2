const HeartButton = ({ like, setLike, favoritesToggle }) => {
  return (
    <div>
      <button className="fav-button" onClick={favoritesToggle}>
        {like ? "❤️" : "🤍"}
      </button>
    </div>
  );
};
export default HeartButton;
