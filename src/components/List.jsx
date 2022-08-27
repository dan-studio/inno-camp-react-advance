import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { useSelector } from "react-redux";

const List = () => {
  const musicList = useSelector(state=>state.counter.list) 
  return (
    <ListDiv>
      {musicList.map((music)=>(
        <Item music={music} key={music.id}/>
      ))}
    </ListDiv>
  );
};
const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default List;