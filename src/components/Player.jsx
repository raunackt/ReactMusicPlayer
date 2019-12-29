import React from "react";
import nextButton from "../img/buttons/next.png";
import prevButton from "../img/buttons/prev.png";
import SongPoster from "./SongPoster";
import SongDetails from "./SongDetails";
import DurationComp from "./DurationComp";

export default props => {
  return (
    <div className="player-main-container">
      <SongPoster songPoster={props.songPoster} />
      <div className="player-container">
        <SongDetails
          songName={props.songName}
          prevButton={prevButton}
          nextButton={nextButton}
          buttonState={props.buttonState}
          onPrev={props.onPrev}
          onPlayOrPause={props.onPlayOrPause}
          onNext={props.onNext}
        />
        <DurationComp
          totalTime={props.totalTime}
          currentSongTime={props.currentSongTime}
          songDur={props.songDur}
          onDurationChange={e => props.onDurationChange(e)}
        />
      </div>
    </div>
  );
};
