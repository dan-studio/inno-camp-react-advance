import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __updateMusic } from "../redux/module/musicSlice";

const Item = React.forwardRef((music, ref) => {
  const { id, artist, title, like, coverUrl } = music
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const likeHandler = (e) => {
    e.preventDefault()
    const updateLike = {
      id,
      like: !like
    }
    dispatch(__updateMusic(updateLike))
    if(!like)alert("liked!")
  };

  return (
    <div>
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
      <div ref={ref}/>
    </div>
  );
});

const CoverImg = styled.img`
  width: 250px;
  height: 250px;
  margin: 20px auto 0;
  object-fit: cover;
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
