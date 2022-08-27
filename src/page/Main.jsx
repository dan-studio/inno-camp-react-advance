import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Header from '../components/Header';
import List from '../components/List';

const Main = () => {
  return (
    <MainPage>
      <Header/>
      <Form/>
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