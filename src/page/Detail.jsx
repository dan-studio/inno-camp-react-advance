import React, { useEffect } from 'react';
import Info from '../components/Info';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __getMusic } from '../redux/module/musicSlice';
import { __getComment } from '../redux/module/commentSlice';

const Detail = () => {
  const { id } = useParams();
  const comments = useSelector((state) => state.comments.comment);
  const contentList = comments.filter((comment) => comment.musicId === id);
  const dispatch = useDispatch();
  const { isLoading, error, list } = useSelector((state) => state.musics);
  const getMusic = list.find((music) => music.id === id); //crud의 read 필요없음.
  console.log(list);
  console.log(getMusic);
  useEffect(() => {
    dispatch(__getMusic());
  }, [dispatch]);

  useEffect(() => {
    dispatch(__getComment());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading . . .</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <DetailPage>
      <Header />
      <DetailContent>
        <Info {...getMusic} />
      </DetailContent>
      <DetailContent>
        {contentList &&
          contentList.map((comment) => (
            <CommentList {...comment} key={comment.id} />
          ))}
      </DetailContent>
      <CommentForm {...getMusic} />
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
