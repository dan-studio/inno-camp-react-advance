import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __deleteComment, __updateComment } from "../redux/module/commentSlice";
import AllRounderButton from "./AllRounderButton";
import useInput from "../hooks/useInput";

const CommentList = ({ musicId, id, userName, content, like }) => {
  const dispatch = useDispatch();
  const [formHelper, setFormHelper] = useState("");
  const [toggle, setToggle] = useState(false);

  const [username, onChangeUsernameHandler, setUserName] = useInput();
  const [comment, onChangeCommentHandler, setComment] = useInput();
  console.log(toggle);

  useEffect(() => {
    setUserName(userName);
  }, [userName]);

  useEffect(() => {
    setComment(content);
  }, [content]);

  const onchangeToggle = () => {
    setToggle((toggle) => !toggle);
  };

  const onchangeFormHelper = () => {
    setFormHelper((formHelper) => !formHelper);
  };

  const onDeleteCommentHandler = () => {
    dispatch(__deleteComment(id));
  };

  const onUpdateCommentHandler = () => {
    if (!username) {
      return setFormHelper("You Must Enter UserName to Proceed");
    }
    if (!comment) {
      return setFormHelper("You Must Enter Comment to Proceed");
    }

    dispatch(
      __updateComment({
        id,
        userName: username,
        content: comment,
      })
    );
    onchangeToggle();
    onchangeFormHelper();
  };

  return (
    <>
      {toggle ? (
        <EditCommentListBox props={formHelper ? "100px":"50px"}>
          {formHelper ? <FormHelper>{formHelper}</FormHelper> : null}
          <div>
            <CommentFormInput
              length="100px"
              onChange={onChangeUsernameHandler}
              type="text"
              placeholder="UserName"
              defaultValue={userName}
            />
            <CommentFormInput
              length="100px"
              onChange={onChangeCommentHandler}
              type="text"
              placeholder="Comment"
              defaultValue={content}
            />
            <AllRounderButton
              onClick={onUpdateCommentHandler}
              length={"60px"}
              type="button"
              buttonName={"Submit"}
            />
          </div>
        </EditCommentListBox>
      ) : (
        <CommentListBox>
          <Paragraph length="100px">{userName}</Paragraph>
          <Paragraph length="240px">{content}</Paragraph>
          <CommentLike>{like ? "♥️" : "♡"}</CommentLike>
          <AllRounderButton
            length={"60px"}
            buttonName={"edit"}
            type="button"
            onClick={onchangeToggle}
          />
          <AllRounderButton
            length={"60px"}
            buttonName={"delete"}
            type="button"
            onClick={onDeleteCommentHandler}
          />
        </CommentListBox>
      )}
    </>
  );
};

export default CommentList;

const CommentListBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;

const CommentLike = styled.span`
  font-size: 20px;
  color: #fa1e2d;
`;

const Paragraph = styled.p`
  display: inline-block;
  word-wrap: break-word;
  width: ${(props) => props.length};
`;

const FormHelper = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #fa1e2d;
`;

const CommentFormInput = styled.input`
  display: inline-block;
  word-wrap: break-word;
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
const EditCommentListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  height: ${(props) => props};
`;
