import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __updateMusic } from "../redux/module/musicSlice";

const Item = ({ id, artist, title, like, coverUrl }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const likeHandler = (e) => {
    e.preventDefault()
    const updateLike = {
      id,
      like: !like
    }
    dispatch(__updateMusic(updateLike))
  };

  return (
    <ItemDiv>
      {like ? (
        <Like onClick={likeHandler}>♥️</Like>
      ) : (
        <Like onClick={likeHandler}>♡</Like>
      )}
      <CoverImg
        onClick={() => {
          navigate("/detail/" + id);
        }}
        src={coverUrl}
      />
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
    </ItemDiv>
  );
};
const ItemDiv = styled.div`
  background-color: white;
  margin: 20px auto;
  width: 250px;
  height: 400px;
  box-shadow: 1px 1px 15px grey;
`;
const CoverImg = styled.img`
  width: 250px;
  height: 250px;
  margin: 20px auto 0;
`;
const Title = styled.h2`
  font-size: 17px;
`;
const Artist = styled.h1`
  font-size: 25px;
`;
const Like = styled.div`
  position: absolute;
  background-color: white;
  height: 30px;
  width: 30px;
  font-size: 24px;
  transform: translate(30%, 770%);
  border-radius: 50%;
  color: #fa1e2d;
  box-shadow: 3px 3px 10px black;
`;
export default Item;