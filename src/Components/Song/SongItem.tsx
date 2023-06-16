import classes from "./SongItem.module.scss";
import { useNavigate } from "react-router";

type ArtistType = { photo: any; name: string; cat: string; type: string };

const SongItem: React.FC<ArtistType> = (props) => {
  const navigation = useNavigate();
  return (
    <li
      onClick={() => {
        navigation(`/${props.type}/${props.name}`);
      }}
    >
      {props.photo}
      <div>
        <h4>{props.name}</h4>
        <p>{props.cat}</p>
      </div>
    </li>
  );
};

export default SongItem;
