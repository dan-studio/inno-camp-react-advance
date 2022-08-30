import styled from "styled-components";
import Item from "./Item";
import {  useSelector } from "react-redux";

const List = () => {
  const musicList = useSelector(state=>state.musics.list) 
  
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