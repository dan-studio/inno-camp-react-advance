import styled from "styled-components";
import Item from "./Item";
import React, { useState } from "react";
import {  useSelector } from "react-redux";
import useMusicList from '../hooks/useMusicList';

const List = () => {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const musicList = useSelector(state=>state.musics.list) 
  useMusicList(query, pageNumber)
  return (
    <ListDiv>
      {musicList.map((music)=>(
        <Item {...music} key={music.id}/>
      ))}
    </ListDiv>
  );
};
const ListDiv = styled.div`
  width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

export default List;
