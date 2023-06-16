import classes from "./SongList.module.scss";
import SongItem from "./SongItem";

type ArtistType = { photo: any; name: string; cat: string; type: string }[];

const SongList: React.FC<{ SONG: ArtistType }> = ({ SONG }) => {
  return (
    <ul className={classes.songs}>
      {SONG.map((item) => (
        <SongItem
          type={item.type}
          key={item.name}
          photo={item.photo}
          name={item.name}
          cat={item.cat}
        />
      ))}
    </ul>
  );
};

export default SongList;
