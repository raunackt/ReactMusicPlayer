import React from "react";

import nextButton from "../img/buttons/next.png";
import prevButton from "../img/buttons/prev.png";

function Player(props) {
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
    <div className="player-main-container">
      <div className="player-container">
        <div className="song-poster">
          <img
            src={props.songPoster}
            alt="Song Post"
            width="128px"
            height="128px"
          />
        </div>
        <div className="song-details">
          <h2>{props.songName}</h2>
          <div className="nav-buttons">
            <li onClick={props.onPrev}>
              <img src={prevButton} alt="Previous Button" />
            </li>
            <li onClick={props.onPlayOrPause}>
              <img src={props.buttonState} alt="Play Button" />
            </li>
            <li onClick={props.onNext}>
              <img src={nextButton} alt="Next Button" />
            </li>
          </div>
          <input
            type="range"
            min="0"
            max={props.totalTime}
            id="songDur"
            value={props.currentSongTime}
            onChange={ev => props.onDurationChange(ev.target.value)}
          />
          <p>
            {calculateMinutes(props.currentSongTime)}:
            {calculateSeconds(props.currentSongTime)} /{" "}
            {calculateMinutes(props.songDur)}:{calculateSeconds(props.songDur)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Player;
