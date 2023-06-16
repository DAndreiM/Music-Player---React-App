import classes from "./MusicPlayer.module.scss";
import ProgressBar from "./ProgressBar";
import SoundControl from "./SoundControl";
import { useState } from "react";

const MusicPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleProgressBarClick = (newCurrentTime: number) => {
    setCurrentTime(newCurrentTime);
  };

  return (
    <div className={classes.musicPlayer}>
      <div className={classes.description}>
        <div className={classes.photoReplacer} />
        <div>
          <h3>Title</h3>
          <p>Artists</p>
        </div>
        <div>
          <button>
            <img src="https://img.icons8.com/nolan/64/like.png" alt="like" />
          </button>
          <button>
            <img
              src="https://img.icons8.com/nolan/64/picture-in-picture.png"
              alt="picture-in-picture"
            />
          </button>
        </div>
      </div>
      <div className={classes["controls_progress"]}>
        <div className={classes.controls}>
          <button>
            <img
              src="https://img.icons8.com/nolan/64/shuffle.png"
              alt="shuffle"
            />
          </button>
          <button>
            <img
              src="https://img.icons8.com/nolan/64/previous.png"
              alt="previous"
            />
          </button>
          <button>
            <img src="https://img.icons8.com/nolan/64/play.png" alt="play" />
          </button>
          <button>
            <img src="https://img.icons8.com/nolan/64/next.png" alt="next" />
          </button>
          <button>
            <img
              src="https://img.icons8.com/nolan/64/repeat.png"
              alt="repeat"
            />
          </button>
        </div>
        <div className={classes.progress}>
          <ProgressBar
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            onProgressBarClick={handleProgressBarClick}
          />
        </div>
      </div>
      <div className={classes.soundControl}>
        <SoundControl volume={volume} onVolumeChange={handleVolumeChange} />
      </div>
    </div>
  );
};

export default MusicPlayer;
