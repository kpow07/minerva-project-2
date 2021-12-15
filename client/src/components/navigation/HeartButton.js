import HeartIcon from "./HeartIcon";

const HeartButton = ({ like, setLike, favoritesToggle }) => {
  return (
    <div>
      <button className="fav-button" onClick={favoritesToggle}>
        {like ? <HeartIcon colour="red"/>:<HeartIcon colour="rgba(255,255,255,50)"/>}
      </button>
    </div>
  );
};
export default HeartButton;
