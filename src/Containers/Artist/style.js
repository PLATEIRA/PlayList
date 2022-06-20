import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 12px 0 12px 24px;

`

export const ArtistContainer = styled.div`
    display: flex;
    max-width: 100%;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 6px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 6px;
        width: 6px;
        height: 6px;

    }

   

`



export const Title = styled.h2`


`