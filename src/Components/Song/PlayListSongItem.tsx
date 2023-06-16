import classes from "./PlayListSongItem.module.scss";

const PlayListSongItem: React.FC<{
  id: number;
  title: string;
  album: string;
  duration: number;
}> = (props) => {
  return (
    <>
      <div>{props.id}</div>
      <div>{props.title}</div>
      <div>{props.album}</div>
      <div>{props.duration}</div>
    </>
  );
};

export default PlayListSongItem;
