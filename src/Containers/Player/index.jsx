import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { handleFavorite } from "../../redux/actions/musicAction";

import { convertDuration } from "../../Utils/convert";
import {
         MainContainer,
         Title,
         PlayerCard,
         MusicCover,
         MusicTitle,
         MusicArtist,
         TimeContronls,
         Bars,
         TimeStart,
         TimeToEnd,
         ControlsContainer,
         LikeButtom,
         PreviusButtom,
         PlayButtom,
         NextButton,
         GoToDeezerButtom,  
         HiddenAudio,       T
        } from "./style";


const Player = () => {
  const dispatch = useDispatch();
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const { music, favoriteList } = useSelector(state => state.music);

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", () => {
      setCurrentTime(audioRef.current.currentTime);
    });
  }, []);

  useEffect(() => {
    if (music) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [music]);

  const checkIsFavorite = () => {
    if (music) {
      let isFavorite = false;

      favoriteList.data.map((m) => {
        if (m.id === music.id) isFavorite = true;
      })

      return isFavorite;
    }

    return false;
  }

  return (
    <MainContainer>
      <Title>Tocando Agora</Title>

      <PlayerCard>
        <MusicCover src={music?.album?.cover_medium} />
        <MusicTitle>{music?.title}</MusicTitle>
        <MusicArtist>{music?.artist?.name}</MusicArtist>

        <TimeContronls>
          <Bars
            type="range"
            min="0"
            max="100"
            step="1"
            value={(currentTime / audioRef?.current?.duration) * 100 || 0}
            onChange={(e) => {
              audioRef.current.currentTime =
                (e.target.value / 100) * audioRef.current.duration;
            }}
          />

          <TimeStart>{convertDuration(audioRef?.current?.duration)}</TimeStart>
          <TimeToEnd>
            {convertDuration(audioRef?.current?.duration - currentTime)}
          </TimeToEnd>
        </TimeContronls>

        <ControlsContainer>
          <LikeButtom
            src={checkIsFavorite() ? "/icons/liked.svg" : "/icons/like.svg"}
            onClick={() => dispatch(handleFavorite(music))}
          />
          <PreviusButtom src="/icons/previus.svg"  onClick={() => (audioRef.current.currentTime = 0)}/>

          <PlayButtom src={audioRef.current?.paused ? "/icons/play.svg" : "/icons/pause.svg"}
                      onClick={() => (audioRef.current?.paused ? audioRef.current.play() : audioRef.current.pause())} 
                      />
          <NextButton src="/icons/next.svg" onClick={() => audioRef.current.currentTime = currentTime + 10 } />

          <a href={music?.link} target="_blank" rel="noreferrer">
          <GoToDeezerButtom src="/icons/link.svg"/>
          </a>
        </ControlsContainer>

            <HiddenAudio ref={audioRef} controls>
              <source src={music?.preview} type="audio/mp3" />
            </HiddenAudio>

      </PlayerCard>
    </MainContainer>
  );
};

export default Player;