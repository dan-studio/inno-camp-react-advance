import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteMusic, __updateMusic } from "../redux/module/musicSlice";
import AllRounderButton from "./AllRounderButton";


const Info = ({ id, artist, title, coverUrl, like }) => {
  const [toggle, setToggle] = useState(false);
  const [formHelper, setFormHelper] = useState(false);
  const titleInput = useRef(null);
  const artistInput = useRef(null);
  const ImgUrlInput = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateHandler = (e) => {
    e.preventDefault();
    if(!artistInput.current.value){return setFormHelper("You Must Enter Artist to Proceed")}
    if(!titleInput.current.value){return setFormHelper("You Must Enter Title to Proceed")}
    if(!ImgUrlInput.current.value){return setFormHelper("You Must Enter Image URL to Proceed")}
    const updateMusic = {
      id,
      artist: artistInput.current.value,
      title: titleInput.current.value,
      coverUrl: ImgUrlInput.current.value,
    };
    dispatch(__updateMusic(updateMusic));
    setToggle(!toggle);
  };
  const likeHandler = () => {
    const updateLike = {
      id,
      like:!like
    }
    dispatch(__updateMusic(updateLike))
  }

  const deleteHandler = (e) => {
    e.preventDefault()
    dispatch(__deleteMusic(id))
    navigate(-1)
  }

  return (
    <StInfoContainer>
      <StAlbumSet>
        <StAlbumImg src={coverUrl} />
        <StArtist>{artist}</StArtist>
        <StTitle>{title}</StTitle>
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
            <h3>Edit</h3>
            <FormHelper>{formHelper}</FormHelper>
            <InputBox
              length="300px"
              ref={artistInput}
              type="text"
              placeholder="Artist"
              defaultValue={artist}
            />
            <InputBox
              length="300px"
              ref={titleInput}
              type="text"
              placeholder="Title"
              defaultValue={title}
            />
            <InputBox
              length="300px"
              ref={ImgUrlInput}
              type="text"
              placeholder="Cover URL"
              defaultValue={coverUrl}
            />
            <AllRounderButton onClick={updateHandler} buttonName={"Submit"} />
          </EditDiv>
        ) : null}
        {toggle ? (
          <AllRounderButton
            onClick={(e) => {
              e.preventDefault();
              setToggle(!toggle);
              setFormHelper("")
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
        <AllRounderButton buttonName={"Delete"} onClick={deleteHandler}/>
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

const StTitle = styled.h2``;

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
`;
const FormHelper = styled.div`
margin-top: 10px;
font-size: 20px;
color: #fa1e2d;
`