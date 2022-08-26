import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderDiv>
      <LogoImg
        src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
        alt="logo"
      />
      <HeaderA href="/">DUXMUSIC</HeaderA>
    </HeaderDiv>
  );
};
const HeaderDiv = styled.div`
  width: 240px;
  margin: 10px auto 0;
  display: flex;
  flex-wrap: wrap;
  
  }
`;
const HeaderA = styled.a`
font-family: 'helvetica', cursive;
  margin: 2px;
  transition: .6s;
  text-decoration: none;
  font-size: 35px;
  font-weight: bold;
  &:hover{
    color: white;
`;

const LogoImg = styled.img`
  margin: 3px;
  height: 35px;
  width: 35px;
`;
export default Header;
