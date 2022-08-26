import React from "react";
import styled from "styled-components";
import Item from "./Item";

const List = () => {
  return (
    <ListDiv>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </ListDiv>
  );
};
const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default List;
