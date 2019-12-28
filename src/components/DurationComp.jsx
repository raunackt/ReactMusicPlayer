import React from "react";

function DurationComp(props) {
  const calculateMinutes = dur => {
    return Math.floor(dur / 60)
      .toString()
      .padStart(2, "0");
  };

  const calculateSeconds = dur => {
    return Math.floor(dur % 60)
      .toString()
      .padStart(2, "0");
  };

  return (
    <div className="duration">
      <span>
        {calculateMinutes(props.currentSongTime)}:
        {calculateSeconds(props.currentSongTime)}
      </span>
      <input
        type="range"
        min="0"
        max={props.totalTime}
        id="songDur"
        value={props.currentSongTime}
        onChange={ev => props.onDurationChange(ev.target.value)}
      />
      <span>
        {calculateMinutes(props.songDur)}:{calculateSeconds(props.songDur)}
      </span>
    </div>
  );
}

export default DurationComp;
