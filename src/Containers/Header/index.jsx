import React from "react";
import { Link } from "react-router-dom";

import Search from "../../Components/Search";
import {Container, 
        ButtonsContainer,
        ButtomLink,
        ButtomIcon,
        ButtomText, 
      } from "./style";


const Header = ({ noSearch }) => {

  return (
    <Container>
    {noSearch ? (<span />) : (<Search/>)}

    <ButtonsContainer> 
      <Link to="/">
        <ButtomLink>
          <ButtomIcon src="/icons/home.svg"/>
          <ButtomText> Home </ButtomText>
        </ButtomLink>
      </Link>
      <Link to="/favoritos">
        <ButtomLink>
          <ButtomIcon src="/icons/favorite.svg"/>
          <ButtomText> Favoritos </ButtomText>
        </ButtomLink>
      </Link>
    </ButtonsContainer>
  </Container>
  );
};

export default Header;
