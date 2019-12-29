import React from "react";

function SongsList(props) {
  const getClassName = i => {
    return i === props.currentSongIndex
      ? "song-playing"
      : "song-not-playing";
  };

  return (
    <div className="song-list-container">
      {props.songsArray.map((songItem, index) => (
        <div
          className="song-item"
          key={songItem.song}
          onClick={() => props.onPlayOrPause(index)}
        >
          <div className="status">
            <img
              src={props.playIcon}
              alt="Playing Icon"
              width="16px"
              height="16px"
              className={getClassName(index)}
            />
            <img
              src={songItem.songPoster}
              alt="Song Poster"
              width="64px"
              height="64px"
            />
          </div>
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
