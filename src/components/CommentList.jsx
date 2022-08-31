import React, { useEffect, useRef} from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {__getComment, __deleteComment, __updateComment } from '../redux/module/commentSlice';
import AllRounderButton from './AllRounderButton';

const CommentList = ({ id, commentLike, userName, content }) => {
  const [toggle, setToggle] = useState(false);
  const [formHelper, setFormHelper] = useState(false);
  const dispatch = useDispatch();
  // const getComment = useSelector(state=>state.comments.comment)
  // const getCommentInfo = getComment.filter(comment=>comment.musicId === id)
  // const {userName, content} = getCommentInfo

  useEffect(() => {
    dispatch(
      __getComment()
    )
  },[dispatch])
  //console.log(getComment);
  const userNameInput = useRef(null);
  const contentInput = useRef(null);
  
  const navigate = useNavigate();
  
  const onCommentHandler = (e) => {
    e.preventDefault();
    // userNameInput.current.value = userName;
    // contentInput.current.value = content;
    if (!userNameInput.current.value) {
      return setFormHelper('이름을 입력해주세요.');
    }
    if (!contentInput.current.value) {
      return setFormHelper('내용을 입력해주세요.');
    }
    console.log(formHelper);
    dispatch(
      __updateComment({
        id,
        userName: userNameInput.current.value,
        content: contentInput.current.value,
      })
    );
    userNameInput.current.value = "";
    contentInput.current.value = "";

    setFormHelper("")
    setToggle(false)
    
  };

  const likeHandler = () => {
    const updateLike = {
      id,
      commentLike: !commentLike
    }
    dispatch(__updateComment(updateLike))
  }


  const onDeleteHandler = (e) => {
    e.preventDefault();
    dispatch(__deleteComment(id))
    navigate(0)
  }
  return (
    <>
      <CommentListBox>
        <FormHelper>{formHelper}</FormHelper>
        {toggle ? (
          <>
            <CommentFormInput
              length="90px"
              type="text"
              placeholder="Username"
              defaultValue={userName}
              ref={userNameInput}
            />
            <CommentFormInput
              length="160px"
              type="text"
              placeholder="Comment"
              defaultValue={content}
              ref={contentInput}
            />
            <Paragraph length="240px">{}</Paragraph>
            <AllRounderButton
              length={"60px"}
              buttonName={"cancel"}
              onClick={() => {
                setToggle(!toggle);
                setFormHelper(false)
              }}
            />
            <AllRounderButton
              length={"60px"}
              buttonName={"submit"}
              onClick={onCommentHandler}
            />
          </>
        ) : (
          <>
            <Paragraph length="100px">{userName}</Paragraph>
            <Paragraph length="240px">{content}</Paragraph>
            {commentLike ? (
              <CommentLike onClick={likeHandler}>♥️</CommentLike>
            ) : (
              <CommentLike onClick={likeHandler}>♡</CommentLike>
            )}
            <AllRounderButton
              length={"60px"}
              buttonName={"edit"}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <AllRounderButton length={"60px"} buttonName={"delete"} onClick={onDeleteHandler}/>
          </>
        )}
      </CommentListBox>
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
  font-size: 20px;
  color: #fa1e2d;
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
