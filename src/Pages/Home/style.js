import styled from 'styled-components';

export const MainContainer = styled.div`
    min-height: 100vh;
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(35,7,40,1) 100%);

`
export const PlayListContainer = styled.div`
    display: flex;
    max-width: 1300px;
    margin: auto;
    @media (max-width: 980px) {
        flex-direction: column;
    }

`

export const HalfContainer = styled.div`
    width: 50%;

    @media (max-width: 980px) {
        width: 100%;
    }

`