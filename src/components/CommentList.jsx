import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AllRounderButton from "./AllRounderButton";

const CommentList = ({ id, comment }) => {
    const allMusicList = useSelector((state) => state.musics.list);
    const location = useLocation();
    const musicId = location.state.id;
    return (
        <>
            {allMusicList.map((commentlist) => {
                if (commentlist.musicid === musicId) {
                    return (
                        <CommentListBox>
                            <Paragraph key={commentlist.id} length="100px">
                                {commentlist.userName}
                            </Paragraph>
                            <Paragraph key={commentlist.id} length="240px">
                                {commentlist.content}
                            </Paragraph>
                            <CommentLike>♥️</CommentLike>
                            <CommentLike>♡</CommentLike>
                            <AllRounderButton
                                length={"60px"}
                                buttonName={"edit"}
                            />
                            <AllRounderButton
                                length={"60px"}
                                buttonName={"delete"}
                            />
                        </CommentListBox>
                    );
                } else {
                    return null;
                }
            })}
            ; ;
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
