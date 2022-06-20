import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { MainContainer, PlayListContainer, Title } from "./style";

import { setToMusicPlay } from '../../redux/actions/musicAction';

import MusicItem from "../../Components/MusicItem";


const MusicList = ({ showFavorites }) => {
  const  dispatch  = useDispatch();
  const { musicList, searchList, favoriteList } = useSelector(state => state.music);
  
  const handleTitle = () => {
    if (showFavorites) return "Lista de favoritos";
    if (searchList.data.length !== 0) return "Resultado da pesquisa";

    return "Mais tocadas";
  }

  const handleList = () => {
    if (showFavorites) return favoriteList;
    if (searchList.data.length !== 0) return searchList;

    return musicList;
  }

  return (
    <MainContainer>
      <Title>{handleTitle()}</Title>
      <PlayListContainer>
        {handleList().data.map((Track, index) => (
          <MusicItem
            key={Track.id}
            title={Track.title}
            artist={Track.artist.name}
            duration={Track.duration}
            position={index}
            cover={Track.album.cover_small}
            action={() => dispatch(setToMusicPlay(Track))}
          />
        ))}
      </PlayListContainer>
    </MainContainer>
  );
};

export default MusicList;
