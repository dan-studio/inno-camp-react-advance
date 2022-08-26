import React from "react";
import styled from "styled-components";

const Item = () => {
  return (
    <ItemDiv>
      <Like>♡♥️</Like>
      <CoverImg src="https://lh3.googleusercontent.com/PSIZ9cf9hpESZwcSz2ylS5I-zIREqCSagxV-X4CJqefrE0sRCktRtFw-a7PlkLygmg7k1nZREKCaSzY=w544-h544-l90-rj" />
      <Title>SICKO MODE</Title>
      <Artist>Travis Scott</Artist>
    </ItemDiv>
  );
};
const ItemDiv = styled.div`
  margin: 20px auto;
  width: 300px;
  height: 400px;
  border: 1px solid black;
`;
const CoverImg = styled.img`
  width: 250px;
  height: 250px;
  margin: 10px auto 0;
  border: 1px solid black;
`;
const Title = styled.h2``;
const Artist = styled.h1``;
const Like = styled.div`
  position: absolute;
  background-color: white;
  height: 20px;
  width: 20px;
  transform: translate(150%, 80%);
  border-radius: 50%;
  color: #fa1e2d;
`;
export default Item;
