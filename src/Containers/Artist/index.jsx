import React from "react";
import {MainContainer, Title, ArtistContainer} from "./style";
import Artists from "../../Components/Artists";
import { getTopArtistList } from "../../redux/actions/artistAction";
import { useSelector } from "react-redux";

const Artist = () => {
    const { artistList } = useSelector(state => state.artist);

    return (
        <MainContainer> 
            <Title>Top Artistas</Title>
            <ArtistContainer>
             {artistList.data.map((artist) => (
               <Artists
                key={artist.id}
                name={artist.name}
                link={artist.link}
                image={artist.picture_medium}
             />
           
             ))}
            </ArtistContainer>
        </MainContainer>
       
    )
  }

export default Artist;