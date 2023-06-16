import classes from "./PlayList.module.scss";
import CategoryItem from "../../Components/CategoryItem/CategoryItem";

const PlayList: React.FC<{ Type?: string }> = ({ Type = "Playlist" }) => {
  return (
    <>
      <CategoryItem type={Type} />
    </>
  );
};

export default PlayList;
