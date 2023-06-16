import classes from "./ArtistItemLibrary.module.scss";
import { NavLink } from "react-router-dom";

type ArtistType = { photo: any; name: string; cat: string };

const ArtistItem: React.FC<ArtistType> = (props) => {
  return (
    <li key={props.name}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to={`/artist/${props.name}`}
      >
        {props.photo}
        <div>
          <h4>{props.name}</h4>
          <p>{props.cat}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default ArtistItem;
