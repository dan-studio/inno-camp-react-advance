import { nanoid } from "@reduxjs/toolkit";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __postComment } from "../redux/module/musicSlice";
import AllRounderButton from "./AllRounderButton";

const CommentForm = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const userNameInput = useRef(null)
  const contentInput = useRef(null)

  
  const commentHandler = () => {
    const usernameValue = userNameInput.current.value
    const contentValue = contentInput.current.value
    console.log(usernameValue, contentValue)
    const postComment = {
      id,
      commentId: nanoid(),
      username: usernameValue,
      content: contentValue,
      commentLike: false
    }
    dispatch(__postComment(postComment))

  }
  return (
    <CommentFormBox>
      <div>
        <CommentFormInput ref={userNameInput} length="200px" type="text" placeholder="Username" />
        <CommentFormInput ref={contentInput} length="400px" type="text" placeholder="comment" />
      </div>
      <AllRounderButton buttonName={"Submit"} onClick={commentHandler}/>
    </CommentFormBox>
  );
};

export default CommentForm;
const CommentFormBox = styled.div`
  width: 450px;
  margin: 20px auto;
  box-shadow: 5px 5px 20px #999;
`;

const CommentFormInput = styled.input`
  margin: 15px;
  width: ${(props) => props.length};
  font-size: 18px;
  border: none;
  text-align: center;
  :focus {
    outline: none;
  }
  &::placeholder {
    color: #aaa;
  }
`;