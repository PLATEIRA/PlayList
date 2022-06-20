import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { MainContainer, PlayListContainer, HalfContainer } from "./style";
import Header from "../../Containers/Header";
import Artist from "../../Containers/Artist";
import MusicList from "../../Containers/MusicList";
import Player from "../../Containers/Player";
import { getMusicList } from "../../redux/actions/musicAction";
import { getTopArtistList } from "../../redux/actions/artistAction";



const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    dispatch(getMusicList());
    dispatch(getTopArtistList());
  }, []);

  return (
  <MainContainer>
    <Header/>
    <Artist/>

    <PlayListContainer>
        <HalfContainer>
          <Player/>
        </HalfContainer>
        <HalfContainer>
          <MusicList/>
        </HalfContainer>
    </PlayListContainer>
  </MainContainer>
  );
};

export default Home;
 
