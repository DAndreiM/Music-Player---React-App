import classes from "./ArtistListLibrary.module.scss";
import ArtistItem from "./ArtistItemLibrary";

type ArtistType = { photo: any; name: string; cat: string }[];

const AristListLibrary: React.FC<{ ARTISTS: ArtistType }> = ({ ARTISTS }) => {
  return (
    <ul className={classes.artists}>
      {ARTISTS.map((item) => (
        <ArtistItem
          key={item.name}
          name={item.name}
          photo={item.photo}
          cat={item.cat}
        />
      ))}
    </ul>
  );
};

export default AristListLibrary;
