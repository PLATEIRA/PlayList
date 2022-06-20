import React from "react";


import { MainContainer, 
       
         RankingPosition,
         MusicCover,
         PlayIcon,
         MusicTitle,
         MusicArtist,
         Duration, } from "./style";



const MusicItem = ({ title, artist, duration, position, cover, action}) => {
    const coverDuration = () => {
        let minutes = Math.floor (duration / 60);
        minutes = minutes <10 ? `0${minutes}` : minutes;
        let seconds = duration % 60 ;
        seconds = seconds <10 ? `0${seconds}` : seconds;

        return `${minutes}:${seconds}`;
    }

    return (
      <MainContainer onClick={action}>
            <RankingPosition>{position}</RankingPosition>
            <MusicCover src={cover}/>
            <PlayIcon src="/icons/play-icon.svg" />
            <MusicTitle>{title}</MusicTitle>
            <MusicArtist>{artist}</MusicArtist>
            <Duration>{coverDuration()}</Duration>
      </MainContainer>
    );
};

export default MusicItem;