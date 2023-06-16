import classes from "./PlaylistSong.module.scss";
import PlayListSongItem from "./PlayListSongItem";

const SONGS = [
  {
    id: 1,
    Title: "A",
    Album: "First",
    Duration: 32,
  },
  {
    id: 2,
    Title: "B",
    Album: "First",
    Duration: 32,
  },
  {
    id: 3,
    Title: "C",
    Album: "First",
    Duration: 32,
  },
  {
    id: 4,
    Title: "D",
    Album: "First",
    Duration: 32,
  },
  {
    id: 5,
    Title: "E",
    Album: "First",
    Duration: 32,
  },
  {
    id: 6,
    Title: "F",
    Album: "First",
    Duration: 32,
  },
];

const PlaylistSongs = () => {
  return (
    <div className={classes.playListSongs}>
      <div className={classes.header}>
        <div>#</div>
        <div>Title</div>
        <div>Album</div>
        <div>Duration</div>
      </div>
      <div className={classes.rows}>
        {SONGS.map((item) => (
          <PlayListSongItem
            key={item.id}
            id={item.id}
            title={item.Title}
            album={item.Album}
            duration={item.Duration}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistSongs;
