import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { __updateComment } from "../redux/module/commentSlice";
import styled from "styled-components";
import AllRounderButton from "./AllRounderButton";

const CommentList = ({ id, commentLike }) => {
    const allMusicList = useSelector((state) => state.musics.comment);

    const location = useLocation();
    const dispatch = useDispatch();

    /**useNavigate로 보내준 music의 id.**/
    const musicid = location.state.id;

    const CommentlikeHandler = (e) => {
        e.preventDefault();
        const updateCommentLike = {
            musicid,
            id: id,
            commentlike: !commentLike,
        };
        console.log(id);
        dispatch(__updateComment(updateCommentLike));
    };

    return (
        <>
            {allMusicList.map((commentlist) => {
                if (commentlist.musicid === musicid) {
                    return (
                        <CommentListBox>
                            <Paragraph key={commentlist.id} length="100px">
                                {commentlist.userName}
                            </Paragraph>
                            <Paragraph key={commentlist.id} length="240px">
                                {commentlist.content}
                            </Paragraph>
                            <CommentLike>
                                {commentLike ? (
                                    <CommentLike onClick={CommentlikeHandler}>
                                        ♥️
                                    </CommentLike>
                                ) : (
                                    <CommentLike onClick={CommentlikeHandler}>
                                        ♡
                                    </CommentLike>
                                )}
                            </CommentLike>
                            <AllRounderButton
                                // onClick={updateCommentHandler}
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
