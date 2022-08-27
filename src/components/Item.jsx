import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Item = ({music}) => {
  const navigate = useNavigate()
  const {id, artist, coverUrl, title, like} = music
  return (
    <ItemDiv>
      {like?<Like>♥️</Like>:<Like>♡</Like>}
      <CoverImg onClick={()=>{
        navigate("/detail/"+id)
      }} src={coverUrl} />
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
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