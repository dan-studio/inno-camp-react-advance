import React from 'react';
import styled from "styled-components";

const CommentListBox = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;

const CommentLike = styled.span`
  font-size: 30px;
  color: red;
`;
const CommentList = () => {
  return (
    <CommentListBox>
      <span>User1:</span>
      <p>Comment1</p>
      <CommentLike>♡♥</CommentLike>
      <button>Del</button>
    </CommentListBox>
  );
};

export default CommentList;