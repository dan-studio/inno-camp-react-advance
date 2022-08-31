import React, { useState } from "react";
import styled from "styled-components";
import AllRounderButton from "./AllRounderButton";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import useInput from "../hooks/useInput";
import { __addComment } from '../redux/module/commentSlice';




const CommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [username, onChangeUsernameHandler, setUserName] = useInput();
  const [comment, onChangeCommentHandler, setComment] = useInput();

  const [formHelper, setFormHelper] = useState("");



  const addCommentHandler = () => {
    if(!username){return setFormHelper("You Must Enter UserName to Proceed")}
    if(!comment){return setFormHelper("You Must Enter Comment to Proceed")}
    dispatch(__addComment(
      {
        musicId:id,
        id:nanoid(),
        userName:username,
        content:comment,
        like:false,
      }));

    setFormHelper("")
    setUserName("");
    setComment("");
  }

  return (
    <CommentFormBox>
      <div>
        <FormHelper>{formHelper}</FormHelper>
        <CommentFormInput length="200px" type="text" placeholder="Username" onChange={onChangeUsernameHandler} value={username}/>
        <CommentFormInput length="400px" type="text" placeholder="comment" onChange={onChangeCommentHandler} value={comment}/>
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

const FormHelper = styled.div`
margin-top: 10px;
font-size: 20px;
color: #fa1e2d;
`