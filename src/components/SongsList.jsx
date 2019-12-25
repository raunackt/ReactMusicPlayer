import React from "react";

function SongsList(props) {
  return (
    <div className="song-list-container">
      {props.songsArray.map((songItem, index) => (
        <div className="song-item" key={songItem.song} onClick ={() => props.onPlayOrPause(index)} >
          <img
            src={songItem.songPoster}
            alt="Song Poster"
            width="64px"
            height="64px"
          />
          <div className="song-item-details">
            <h3>{songItem.songName}</h3>
            <p>{songItem.songCredit}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongsList;
