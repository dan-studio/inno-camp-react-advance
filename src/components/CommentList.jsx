import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AllRounderButton from "./AllRounderButton";

const CommentList = ({ commentId, userName, content, commentLike }) => {
  const { id } = useParams();
  const comments = useSelector((state)=>state.musics.list.find((music) => music.id === id).comment)  
  console.log(comments)
  return (
    <>
      {comments?.map((comment) => (
        <CommentListBox key={comment.commentId}>
          <Paragraph length="100px">{comment.userName}</Paragraph>
          <Paragraph length="240px">{comment.content}</Paragraph>
          {commentLike ? (
            <CommentLike>♥️</CommentLike>
          ) : (
            <CommentLike>♡</CommentLike>
          )}
          <AllRounderButton length={"60px"} buttonName={"edit"} />
          <AllRounderButton length={"60px"} buttonName={"delete"} />
        </CommentListBox>
      ))}
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