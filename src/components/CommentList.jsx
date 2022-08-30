import React from "react";
import styled from "styled-components";
import AllRounderButton from "./AllRounderButton";

const CommentList = () => {
    return (
        <>
            <CommentListBox>
                <Paragraph length="100px">{}</Paragraph>
                <Paragraph length="240px">{}</Paragraph>
                <CommentLike>♥️</CommentLike>
                <CommentLike>♡</CommentLike>
                <AllRounderButton length={"60px"} buttonName={"edit"} />
                <AllRounderButton length={"60px"} buttonName={"delete"} />
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
