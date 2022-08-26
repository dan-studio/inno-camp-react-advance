import React from 'react';
import styled from "styled-components";

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

const CommentForm = () => {
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
      <button>Submit</button>
    </CommentFormBox>
  );
};

export default CommentForm;