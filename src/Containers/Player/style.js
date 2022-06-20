import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 12px 24px;
    
`



export const Title = styled.h2`
   

`



export const PlayerCard = styled.div`
    background-color: #b1cccc;
    border-radius: 24px;
    margin-top: 62px;
    padding: 32px;
    flex-direction: column;
    align-items: center;
    display: flex;
    transition: 0.5s ease-out;
    overflow: visible;
 
    

`



export const MusicCover = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 24px;
    box-shadow: 0px 20px 24px rgba (0, 0, 0, 0.2);
`

export const MusicTitle = styled.h3`
    margin-top: 36px;
    margin-bottom: 8px;
    //color: black;

`
export const MusicArtist = styled.span`
    color: #9c9c9c;

`
export const TimeContronls = styled.div`
    margin-top: 24px;
    width: 100%;
    


`

export const Bars = styled.input`
    margin-top: 24px;
    width: 100%;
    
    
    

`
export const TimeStart = styled.span`
    color: #c9c9c9;
    font-size: 14px;
    

`
export const TimeToEnd = styled.span`
    float: right;
    color: #c9c9c9;
    font-size: 14px;
    

`
export const ControlsContainer = styled.div`
    margin-top: 32px;
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: space-between;

`
export const LikeButtom = styled.img`
    cursor: pointer;
    padding: 12px;

`
export const PreviusButtom = styled.img`
    cursor: pointer;
    padding: 12px;

`
export const PlayButtom = styled.img`
    cursor: pointer;
    padding: 12px;

`
export const NextButton = styled.img `
    cursor: pointer;
    padding: 12px;

`
export const GoToDeezerButtom = styled.img`
    cursor: pointer;
    padding: 12px;

`
export const HiddenAudio = styled.audio`
    display: none;
`
