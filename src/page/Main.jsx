import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Form from '../components/Form';
import Header from '../components/Header';
import List from '../components/List';
import { __getMusic} from "../redux/module/musicSlice";

const Main = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.musics);

  useEffect(() => {
    dispatch(__getMusic());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }


  return (
    <MainPage>
      <Header/>
      <Form />
      <List/>
    </MainPage>
  );
};
const MainPage = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`

export default Main;