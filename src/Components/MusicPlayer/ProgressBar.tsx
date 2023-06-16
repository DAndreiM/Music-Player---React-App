import classes from "./ProgressBar.module.scss";
import { useFormatTime } from "../../customHooks/useFormatTime";

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  onProgressBarClick: (newCurrentTime: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  duration,
  onProgressBarClick,
  isPlaying,
}) => {
  const formatTime = useFormatTime();
  const progress = (currentTime / duration) * 100;

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPlaying) return;
    const progressBar = e.currentTarget as HTMLDivElement;
    const totalWidth = progressBar.offsetWidth;
    const offsetX = e.nativeEvent.offsetX;
    const clickedProgress = (offsetX / totalWidth) * 100;
    const newCurrentTime = (clickedProgress / 100) * duration;
    onProgressBarClick(newCurrentTime);
  };

  return (
    <>
      <p>{isPlaying ? formatTime(currentTime) : "--"}</p>
      <div className={classes["progress-bar"]} onClick={handleProgressBarClick}>
        <div
          className={classes["progress-bar__bar"]}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>{isPlaying ? formatTime(duration) : "--"}</p>
    </>
  );
};

export default ProgressBar;
