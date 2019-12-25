import React, { useState } from "react";
import Player from "./components/Player";
import songOne from "./songs/song-1.mp3";
import songTwo from "./songs/song-2.mp3";
import songThree from "./songs/song-3.mp3";
import songFour from "./songs/song-4.mp3";
import songFive from "./songs/song-5.mp3";
import songSix from "./songs/song-6.mp3";
import songSeven from "./songs/song-7.mp3";
import songEight from "./songs/song-8.mp3";
import songNine from "./songs/song-9.mp3";
import songTen from "./songs/song-10.mp3";
import songOnePoster from "./img/posters/pos-1.jpg";
import songTwoPoster from "./img/posters/pos-2.jpg";
import songThreePoster from "./img/posters/pos-3.jpg";
import songFourPoster from "./img/posters/pos-4.png";
import songFivePoster from "./img/posters/pos-5.jpeg";
import songSixPoster from "./img/posters/pos-6.jpg";
import songSevenPoster from "./img/posters/pos-7.jpg";
import songEightPoster from "./img/posters/pos-8.jpeg";
import songNinePoster from "./img/posters/pos-9.jpg";
import songTenPoster from "./img/posters/pos-10.jpeg";
import SongsList from "./components/SongsList";
import playButton from "./img/buttons/play.png";
import pauseButton from "./img/buttons/pause.png";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [audioObj, setAudioObj] = useState(new Audio());
  const [buttonState, setButtonState] = useState(playButton);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songDur, setSongDur] = useState(0);
  const [currentSongTime, setCurrentSongTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const songsList = [
    {
      song: songOne,
      songName: "Adventure",
      songPoster: songOnePoster,
      songCredit: "bensounds.com"
    },
    {
      song: songTwo,
      songName: "Creative Minds",
      songPoster: songTwoPoster,
      songCredit: "bensounds.com"
    },
    {
      song: songThree,
      songName: "Energy",
      songPoster: songThreePoster,
      songCredit: "bensounds.com"
    },
    {
      song: songFour,
      songName: "Epic",
      songPoster: songFourPoster,
      songCredit: "bensounds.com"
    },
    {
      song: songFive,
      songName: "Happy Rock",
      songPoster: songFivePoster,
      songCredit: "bensounds.com"
    },
    {
      song: songSix,
      songName: "Inspire",
      songPoster: songSixPoster,
      songCredit: "bensounds.com"
    },
    {
      song: songSeven,
      songName: "Once Again",
      songPoster: songSevenPoster,
      songCredit: "bensounds.com"
    },
    {
      song: songEight,
      songName: "Relaxing",
      songPoster: songEightPoster,
      songCredit: "bensounds.com"
    },
    {
      song: songNine,
      songName: "Sexy",
      songPoster: songNinePoster,
      songCredit: "bensounds.com"
    },
    {
      song: songTen,
      songName: "Tomorrow",
      songPoster: songTenPoster,
      songCredit: "bensounds.com"
    }
  ];

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
