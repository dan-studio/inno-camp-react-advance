import React, { useEffect } from "react";
import Info from "../components/Info";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getMusic } from "../redux/module/musicSlice";
import { __getComment } from "../redux/module/commentSlice";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { isLoading, error, list } = useSelector((state) => state.musics);
    const { commentIsLoading, commentError, comment } = useSelector(
        (state) => state.comments
    );

    const getMusic = list.find((music) => music.id === id); //crud의 read 필요없음.
    const getComment = comment.filter((comment) => comment.musicid === id);
    const state = useSelector((state) => state);
    console.log(state);
    console.log(comment);

    useEffect(() => {
        dispatch(__getMusic());
    }, [dispatch]);

    useEffect(() => {
        dispatch(__getComment());
    }, [dispatch]);

    if (isLoading || commentIsLoading) {
        return <div>Loading . . .</div>;
    }
    if (error || commentError) {
        return <div>{error.message}</div>;
    }

    return (
        <DetailPage>
            <Header />
            <DetailContent>
                <Info {...getMusic} />
            </DetailContent>
            <DetailContent>
                <CommentList {...getComment} />
            </DetailContent>
            <CommentForm />
        </DetailPage>
    );
};
const DetailPage = styled.div`
    max-width: 1000px;
    min-width: 800px;
    margin: auto;
`;
const DetailContent = styled.div`
    width: 450px;
    margin: auto;
    box-shadow: 5px 5px 10px #999;
`;
export default Detail;
