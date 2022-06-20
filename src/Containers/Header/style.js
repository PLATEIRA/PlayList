import { useTransition } from 'react';
import styled from 'styled-components';

export const Container =  styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;

    border-bottom: 2px solid #9c9c9c;
`
export const ButtonsContainer =  styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;

`

export const ButtomLink = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  margin: 0 6px;
  text-decoration: none;


transition: 0.2s;


&:hover {
  background-color: #989ca3;
  transform: scale(1.1);
}

`;


export const ButtomIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 6px;

`;

export const ButtomText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: black;
  font-family: 'Roboto', sans-serif;

`;