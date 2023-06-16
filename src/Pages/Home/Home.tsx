import classes from "./Home.module.scss";
import SongList from "../../Components/Song/SongList";

type SongsType = { photo: any; name: string; cat: string; type: string }[];

const defPhoto = (
  <img
    width="48"
    height="48"
    src="https://img.icons8.com/color/48/circled-user-male-skin-type-6--v1.png"
    alt="circled-user-male-skin-type-6--v1"
  />
);

const SONGS: SongsType = [
  {
    photo: defPhoto,
    name: "Eminem",
    cat: "Artist",
    type: "Track",
  },
  {
    photo: defPhoto,
    name: "D12",
    cat: "Artist",
    type: "Playlist",
  },
];

const Home = () => {
  return (
    <section className={classes.recommandation}>
      <h1>Recently Played</h1>
      <SongList SONG={SONGS} />
    </section>
  );
};

export default Home;
