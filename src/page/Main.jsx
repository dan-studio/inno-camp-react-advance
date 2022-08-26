import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import List from '../components/List';

const Main = () => {
  return (
    <MainPage>
      <Header/>
      <List/>
    </MainPage>
  );
};
const MainPage = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  border: 1px solid black;
`

export default Main;