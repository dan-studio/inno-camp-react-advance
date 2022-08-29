import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteMusic, __updateMusic, __updateLike } from "../redux/module/musicSlice";
import AllRounderButton from "./AllRounderButton";

const Info = ({ coverUrl, artist, title, like, id }) => {
  const titleInput = useRef(null);
  const artistInput = useRef(null);
  const ImgUrlInput = useRef(null);
  const FormHelp = useRef(null);
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteItem = (e) => {
    e.preventDefault();
    dispatch(__deleteMusic(id));
    navigate(-1);
  };

  const likeHandler = () => {
    dispatch(__updateLike({id:id, like:!like}));
  }

  return (
    <StInfoContainer>
      <StAlbumSet>
        <StAlbumImg src={coverUrl} />
        <StArtist>{artist}</StArtist>
        <StTiltle>{title}</StTiltle>
      </StAlbumSet>
      <StButtonSet>
        {like ? <StLike onClick={likeHandler}>♥️</StLike> : <StLike onClick={likeHandler}>♡</StLike>}
        <AllRounderButton
          onClick={() => {
            navigate(-1);
          }}
          buttonName={"Go Back"}
        />
      </StButtonSet>
      <StButtonSet>
      {toggle ? (
        <EditDiv>
          <h2>Edit</h2>
          <InputBox length="300px" ref={artistInput} type="text" placeholder="Artist" defaultValue={artist}/>
          <InputBox length="300px" ref={titleInput} type="text" placeholder="Title" defaultValue={title}/>
          <InputBox
            length="300px"
            ref={ImgUrlInput}
            type="text"
            placeholder="Cover URL"
            defaultValue={coverUrl}
          />
          <div ref={FormHelp}></div>
          <AllRounderButton
            onClick={(e) => {
              e.preventDefault();
              if (
                !artistInput.current.value ||
                !titleInput.current.value ||
                !ImgUrlInput.current.value
              ) {
                //TODO: FormHelp 멘트 추가하기
                return;
              }
              dispatch(
                __updateMusic({
                  id: id,
                  artist: artistInput.current.value,
                  title: titleInput.current.value,
                  coverUrl: ImgUrlInput.current.value,
                })
              );
              setToggle(!toggle);
            }}
            buttonName={"Submit"}
          />
        </EditDiv>
      ) : null}
      {toggle ? (
        <AllRounderButton
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
          }}
          buttonName={"Close"}
        />
      ) : (
        <AllRounderButton
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
          }}
          buttonName={"Edit"}
        />
      )}
      </StButtonSet>
      <StButtonSet>
        <AllRounderButton buttonName={"Delete"} onClick={deleteItem} />
      </StButtonSet>
    </StInfoContainer>
  );
};

export default Info;

const StInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  min-width: 800px;
  margin: 20px auto;
`;
const StAlbumSet = styled.div`
  margin: 30px 0 0 0;
  width: 450px;
`;
const StAlbumImg = styled.img`
  width: 450px;
  height: 450px;
`;

const StArtist = styled.h2``;

const StTiltle = styled.h2``;

const StButtonSet = styled.div`
  width: 450px;
`;

const StLike = styled.div`
  font-size: 40px;
  color: #fa1e2d;
`;
const InputBox = styled.input`
  margin: 30px;
  padding: 8px 10px;
  font-size: 20px;
  border: none;
  text-align: center;
  :focus {
    outline: none;
  }
  width: ${(props) => props.length};
  &::placeholder {
    color: #aaa;
  }
`;
const EditDiv = styled.div`
box-shadow: 5px 5px 10px #999;

`