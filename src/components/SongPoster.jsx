import React from 'react'

function SongPoster(props) {
    return (
        <div className="song-poster">
        <img
          src={props.songPoster}
          alt="Song Poster"
          width="128px"
          height="128px"
        />
      </div>
    )
}

export default SongPoster
