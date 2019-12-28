import React from "react";

function SongDetails(props) {
  return (
    <div className="song-details">
      <h2>{props.songName}</h2>
      <div className="nav-buttons">
        <li onClick={props.onPrev}>
          <img src={props.prevButton} alt="Previous Button" />
        </li>
        <li onClick={props.onPlayOrPause}>
          <img src={props.buttonState} alt="Play Button" />
        </li>
        <li onClick={props.onNext}>
          <img src={props.nextButton} alt="Next Button" />
        </li>
      </div>
    </div>
  );
}

export default SongDetails;
