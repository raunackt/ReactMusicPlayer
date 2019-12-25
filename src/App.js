import React, { useState, useEffect } from "react";
import Player from "./components/Player";
import SongsList from "./components/SongsList";
import playButton from "./img/buttons/play.png";
import pauseButton from "./img/buttons/pause.png";
import ResourcesArray from "./components/ResourcesArray";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [audioObj, setAudioObj] = useState(new Audio());
  const [buttonState, setButtonState] = useState(playButton);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songDur, setSongDur] = useState(0);
  const [currentSongTime, setCurrentSongTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const songsList = ResourcesArray();

  const handlePlayOrPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      setButtonState(playButton);
      const currentAudio = audioObj;
      currentAudio.pause();
    } else {
      setButtonState(pauseButton);
      playSong(currentSongIndex);
    }
  };

  const handleNextButton = () => {
    setButtonState(pauseButton);
    playSong(currentSongIndex + 1);
  };

  const handlePrevButton = () => {
    setButtonState(pauseButton);
    playSong(currentSongIndex - 1);
  };

  const playSong = (cSI = 0) => {
    if (cSI > songsList.length - 1) cSI = 0;
    else if (cSI < 0) cSI = songsList.length - 1;
    const oldAudioObj = audioObj;
    oldAudioObj.pause();
    oldAudioObj.removeAttribute("src");
    oldAudioObj.load();
    const newAudioObj = new Audio();
    newAudioObj.src = songsList[cSI].song;
    setCurrentSongIndex(cSI);
    newAudioObj.onloadeddata = () => {
      if (newAudioObj.readyState > 2) {
        newAudioObj.play();
        setTotalTime(newAudioObj.duration);
        setSongDur(newAudioObj.duration);
      }
    };

    newAudioObj.ontimeupdate = () => {
      setCurrentSongTime(newAudioObj.currentTime);
    };
    setAudioObj(newAudioObj);
    setIsPlaying(true);
    setButtonState(pauseButton);
  };

  const handleDurationChange = cST => {
    const currentAudio = audioObj;
    currentAudio.currentTime = cST;
    setAudioObj(currentAudio);
    return setCurrentSongTime(currentAudio.currentTime);
  };

  const songSrc = songsList[currentSongIndex].song;
  const songNameSrc = songsList[currentSongIndex].songName;
  const posterSrc = songsList[currentSongIndex].songPoster;

  useEffect(() => console.log(currentSongIndex), [currentSongIndex]);

  return (
    <main>
      <Player
        song={songSrc}
        songName={songNameSrc}
        songPoster={posterSrc}
        buttonState={buttonState}
        currentSong={currentSongIndex}
        songDur={songDur}
        totalTime={totalTime}
        currentSongTime={currentSongTime}
        onNext={() => handleNextButton()}
        onPrev={() => handlePrevButton()}
        onPlayOrPause={() => handlePlayOrPause()}
        onDurationChange={e => handleDurationChange(e)}
      />
      <SongsList
        songsArray={songsList}
        onPlayOrPause={index => playSong(index)}
      />
    </main>
  );
}

export default App;
