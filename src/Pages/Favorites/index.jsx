import React from "react";
import { MainContainer, PlayListContainer, HalfContainer } from "./style";
import Header from "../../Containers/Header";
import MusicList from "../../Containers/MusicList";
import Player from "../../Containers/Player";


const Favorites = () => {
  return (
  <MainContainer>
    <Header noSearch/>

    <PlayListContainer>
        <HalfContainer>
          <Player/>
        </HalfContainer>
        <HalfContainer>
          <MusicList showFavorites/>
        </HalfContainer>
    </PlayListContainer>
  </MainContainer>
  );
};

export default Favorites;
 
