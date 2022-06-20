import React from "react";
import { MainContainer, ArtistCover, ArtistName } from "./style";



const Artists = ({ name,  link, image }) => {
    return (
        <MainContainer href={link} target="_blank">
            <ArtistCover src={image}/>
            <ArtistName>{name}</ArtistName>

        </MainContainer>

    )
};

export default Artists;