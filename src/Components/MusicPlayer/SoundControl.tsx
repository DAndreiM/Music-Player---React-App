import React, { useState } from "react";

import classes from "./SoundControl.module.scss"; // Import your custom CSS file for SoundControl styling

interface SoundControlProps {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
}

const SoundControl: React.FC<SoundControlProps> = ({
  volume,
  onVolumeChange,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(volume);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    onVolumeChange(newVolume);
    if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }
    setPreviousVolume(newVolume);
  };

  const handleMuteToggle = () => {
    if (isMuted) {
      onVolumeChange(previousVolume);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);
      onVolumeChange(0);
      setIsMuted(true);
    }
  };

  const getSoundIcon = () => {
    if (isMuted || volume === 0) {
      return "MUTE";
    } else if (volume < 50) {
      return "UP";
    } else {
      return "DOWN";
    }
  };

  return (
    <div>
      <button className="sound-control-button" onClick={handleMuteToggle}>
        {getSoundIcon()}
      </button>
      <input
        className={classes["sound-control-input"]}
        type="range"
        min={0}
        max={100}
        value={isMuted ? 0 : volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default SoundControl;
