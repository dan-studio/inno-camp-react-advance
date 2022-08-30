import React, { useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { __addComment } from "../redux/module/musicSlice";
import AllRounderButton from "./AllRounderButton";

const CommentForm = ({ id, commentId, userName, content }) => {
    const userNameInput = useRef(null);
    const contentInput = useRef(null);
    const location = useLocation();
    const musicid = location.state.id;
    // const comentLikeInput = useRef(null);
    const dispatch = useDispatch();

    const onCommentHandler = (e) => {
        e.preventDefault();
        dispatch(
            __addComment({
                musicid,
                // id,
                commentId: nanoid(),
                userName: userNameInput.current.value,
                content: contentInput.current.value,
                commentLike: false,
            })
        );
    };
    console.log(id);
    return (
        <CommentFormBox>
            <div>
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
                    placeholder="comment"
                />
            </div>
            <AllRounderButton
                onClick={onCommentHandler}
                buttonName={"Submit"}
            />
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
