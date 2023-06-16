import classes from "./CategoryItem.module.scss";
import { Link } from "react-router-dom";
import PlaylistSong from "../Song/PlaylistSong";

const CategoryItem: React.FC<{ type: string }> = ({ type = "Playlist" }) => {
  let Content;
  switch (type) {
    case "Playlist": {
      Content = <PlaylistSong />;
      break;
    }
    default: {
      Content = null;
    }
  }
  return (
    <section>
      <div className={classes.description}>
        <img
          width="200"
          height="200"
          src="https://img.icons8.com/emoji/48/orange-square-emoji.png"
          alt="orange-square-emoji"
        />
        <div>
          <p>{type}</p>
          <h2>Eminem Mix</h2>
          <p>Artists list</p>
          <p>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/48/spotify.png"
              alt="spotify"
            />{" "}
            <Link to={`/`}>Spotify</Link> - 50 Songs, about 3 hr 30 min
          </p>
        </div>
      </div>
      <div className={classes.playListOptions}>
        <button>
          <img
            width="65"
            height="65"
            src="https://img.icons8.com/nolan/64/play.png"
            alt="play"
          />
        </button>
        <button>
          <img
            width="55"
            height="55"
            src="https://img.icons8.com/nolan/64/like.png"
            alt="like"
          />
        </button>
        <button>
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/nolan/64/sorting-options.png"
            alt="sorting-options"
          />
        </button>
      </div>
      <div className={classes.content}>{Content}</div>
    </section>
  );
};

export default CategoryItem;
