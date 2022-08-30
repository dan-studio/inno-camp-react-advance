import React from "react";
import styled from "styled-components";
import AllRounderButton from "./AllRounderButton";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import useInput from "../hooks/useInput";

const CommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [username, onChangeUsernameHandler] = useInput();
  const [comment, onChangeCommentHandler] = useInput();

  const addCommentHandler = () => {

  }

  return (
    <CommentFormBox>
      <div>
        <CommentFormInput length="200px" type="text" placeholder="Username" onChange={onChangeUsernameHandler}/>
        <CommentFormInput length="400px" type="text" placeholder="comment" onChange={onChangeCommentHandler}/>
      </div>
      <AllRounderButton onClick={addCommentHandler} buttonName={"Submit"}/>
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