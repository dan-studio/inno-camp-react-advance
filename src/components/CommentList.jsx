import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
import { __deleteComment, __updateComment } from "../redux/module/commentSlice";
import styled from "styled-components";
import AllRounderButton from "./AllRounderButton";

const CommentList = ({ id, musicid, userName, content, commentLike }) => {
    // const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const userNameInput = useRef(null);
    const contentInput = useRef(null);
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

    const updateCommentHandler = (e) => {
        e.preventDefault();
        const updateComment = {
            id,
            userName: userNameInput.current.value,
            content: contentInput.current.value,
        };
        dispatch(__updateComment(updateComment));
        setToggle(!toggle);
    };

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
                {toggle ? (
                    <AllRounderButton
                        onClick={(e) => {
                            e.preventDefault();
                            setToggle(!toggle);
                        }}
                        buttonName={"Close"}
                    />
                ) : (
                    <AllRounderButton
                        onClick={(e) => {
                            e.preventDefault();
                            setToggle(!toggle);
                        }}
                        buttonName={"Edit"}
                    />
                )}
                <AllRounderButton
                    onClick={deleteCommentHandler}
                    length={"60px"}
                    buttonName={"delete"}
                />
                {toggle ? (
                    <EditDiv>
                        <h3>Edit</h3>
                        <input
                            length="300px"
                            type="text"
                            ref={userNameInput}
                            placeholder="userName"
                            defaultValue={userName}
                        />
                        <input
                            length="300px"
                            type="text"
                            ref={contentInput}
                            placeholder="content"
                            defaultValue={content}
                        />
                        <AllRounderButton
                            onClick={updateCommentHandler}
                            buttonName={"Submit"}
                        />
                    </EditDiv>
                ) : null}
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
const EditDiv = styled.div`
    box-shadow: 5px 5px 10px #999;
`;
