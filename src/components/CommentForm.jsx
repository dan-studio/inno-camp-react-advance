import React from "react";
import styled from "styled-components";
import AllRounderButton from "./AllRounderButton";

const CommentForm = () => {
    return (
        <CommentFormBox>
            <div>
                <CommentFormInput
                    length="200px"
                    type="text"
                    placeholder="Username"
                />
                <CommentFormInput
                    length="400px"
                    type="text"
                    placeholder="comment"
                />
            </div>
            <AllRounderButton buttonName={"Submit"} />
        </CommentFormBox>
    );
};

export default CommentForm;
const CommentFormBox = styled.div`
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
