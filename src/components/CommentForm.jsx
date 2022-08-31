import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __addComment, __updateComment } from '../redux/module/commentSlice';
import AllRounderButton from './AllRounderButton';
import styled from 'styled-components';

const CommentForm = () => {
  const [toggle, setToggle] = useState(false);
  const [formHelper, setFormHelper] = useState("");
  const userNameInput = useRef(null);
  const contentInput = useRef(null);
  //const commentLikeInput = useRef(null);
  const dispatch = useDispatch();
  const { id } = useParams();

  const onCommentHandler = (e) => {
    e.preventDefault();
    if (!userNameInput.current.value) {
      return setFormHelper('이름을 입력해주세요.');
    }
    if (!contentInput.current.value) {
      return setFormHelper('내용을 입력해주세요.');
    }
    console.log(formHelper);
    dispatch(
      __addComment({
        musicId: id,
        id: nanoid(),
        userName: userNameInput.current.value,
        content: contentInput.current.value,
        commentLike: false
      })
    );
    userNameInput.current.value = "";
    contentInput.current.value = "";

    setFormHelper("")
    
  };

//   const onUpdateHandler = () => {
//     if (!userNameInput.current.value) {
//       return setFormHelper('You Must Enter Username to Proceed');
//     }
//     if (!contentInput.current.value) {
//       return setFormHelper('You Must Enter Content to Proceed');
//     }
//     const updateComment = {
//       id: id,
//       userName: userNameInput.current.value,
//       content: contentInput.current.value,
//     };
//     dispatch(__updateComment(updateComment));
//     setToggle(!toggle);
//   };

  return (
    <CommentFormBox>
      <div>
        <FormHelper>{formHelper}</FormHelper>
        <CommentFormInput
          ref={userNameInput}
          length="200px"
          type="text"
          placeholder="Username"
        />
        <CommentFormInput
          ref={contentInput}
          length="400px"
          type="text"
          placeholder="content"
        />
      </div>
      {/* {toggle ? (
        <EditDiv>
          <h3>Edit</h3>
          <FormHelper>{formHelper}</FormHelper>
          <InputBox
            ref={userName}
            type="text"
            placeholder="Username"
            defaultValue={userName}
          />
          <InputBox
            ref={content}
            type="text"
            placeholder="Content"
            defaultValue={content}
          />
          <AllRounderButton onClick={onUpdateHandler} buttonName={'Submit'} />
        </EditDiv>
      ) : null} */}
      <AllRounderButton onClick={onCommentHandler} buttonName={'SubmitT'} />
    </CommentFormBox>
  );
};

export default CommentForm;
const CommentFormBox = styled.form`
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
const EditDiv = styled.div`
  box-shadow: 5px 5px 10px #999;
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
const FormHelper = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: #fa1e2d;
`;
