import { nanoid } from '@reduxjs/toolkit';
import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { __addComment } from "../redux/module/musicSlice";
import styled from "styled-components";
import AllRounderButton from './AllRounderButton';

const CommentFormBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  margin: auto;
`;

const CommentFormInput = styled.input`
  margin-right: 20px;
`;

const CommentForm = ({commentId, username, content, commentLike, comment}) => {
  const usernameInput = useRef(null);
  const contentInput = useRef(null);
  const commentLikeInput = useRef(null);
  const addComment = {
          commentId ,
          username: usernameInput.current.value,
          content: contentInput.current.value,
          commentLike: commentLikeInput.current.value
  }
  console.log(usernameInput.current.value)
  console.log(contentInput.current.value)
  console.log(commentLikeInput.current.value)
  const dispatch = useDispatch();
  return (
    <CommentFormBox>
      <div>
        <CommentFormInput 
          type="text"
          placeholder='Username' 
        />
        <CommentFormInput 
          type="text"
          placeholder='comment' 
        />
      </div>
      <AllRounderButton
      onClick={(e) => {
        e.preventDefault();
        dispatch(
          __addComment(addComment)
        )
      }}
      buttonName={"Submit"} />
    </CommentFormBox>
  );
};

export default CommentForm;