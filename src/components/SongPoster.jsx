import React from "react";

export default props => {
  return (
    <div className="song-poster">
      <img
        src={props.songPoster}
        alt="Song Poster"
        width="128px"
        height="128px"
      />
    </div>
  );
};
