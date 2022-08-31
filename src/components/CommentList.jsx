import React from "react";
import { useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
import { __deleteComment, __updateComment } from "../redux/module/commentSlice";
import styled from "styled-components";
import AllRounderButton from "./AllRounderButton";

const CommentList = ({ id, musicid, userName, content, commentLike }) => {
    // const location = useLocation();
    const dispatch = useDispatch();

    /**useNavigate로 보내준 music의 id.**/
    // const musicid = location.state.id;

    const CommentlikeHandler = (e) => {
        const updateCommentLike = {
            musicid,
            id: id,
            commentLike: !commentLike,
        };
        // console.log(id);
        dispatch(__updateComment(updateCommentLike));
    };

    // const updateCommentHandler = (e) => {
    //     const updateComment = {
    //         id,
    //         userName,
    //         content,
    //     }
    // };

    const deleteCommentHandler = (e) => {
        e.preventDefault();
        //이런식으로 객체로 보내면 에러남.
        // const deleteComment = {
        //     // musicid,
        //     id,
        // };
        dispatch(__deleteComment(id));
    };

    return (
        <>
            <CommentListBox>
                <Paragraph length="100px">{userName}</Paragraph>
                <Paragraph length="240px">{content}</Paragraph>
                <CommentLike onClick={CommentlikeHandler}>
                    {commentLike ? "♥️" : "♡"}
                </CommentLike>
                <AllRounderButton
                    // onClick={updateCommentHandler}
                    length={"60px"}
                    buttonName={"edit"}
                />
                <AllRounderButton
                    onClick={deleteCommentHandler}
                    length={"60px"}
                    buttonName={"delete"}
                />
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

const CommentLike = styled.button`
    font-size: 20px;
    color: #fa1e2d;
`;
const Paragraph = styled.p`
    display: inline-block;
    word-wrap: break-word;
    width: ${(props) => props.length};
`;
