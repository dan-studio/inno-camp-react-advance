import styled from "styled-components";
import Item from "./Item";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getItems } from "../api/api";
import LoadingItem from "./LoadingItem";

const List = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingItem, setLoadingItem] = useState(true)
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1,
  });
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

  const loadItems = useCallback(async () => {
    setLoading(true);
    console.log("isLoading")
    await getItems(page, 6).then((res) => {
      setItems((prevState) => [...prevState, res]);
    });
    setLoading(false);
    console.log("Loading done")
  }, [page]);

<<<<<<< HEAD
  const loadSkeleton = () => (
    <>
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
    </>
  );
=======

>>>>>>> 5734988ee32b7d24d426c844e8aa28bbcdd7f0f7

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    loadItems();
  }, [loadItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setTimeout(() => {
        setPage((prevState) => prevState + 1);
      }, 800);
    }else if(inView && loading){
      setLoadingItem(false)
      console.log("lodinitem set FALSE")
    }else{
      setLoadingItem(true)
    }
  }, [inView, loading]);
<<<<<<< HEAD
=======
  const find = items.map(item=>
    item.map(item=>item.id))

>>>>>>> 5734988ee32b7d24d426c844e8aa28bbcdd7f0f7

  return (
    <ListDiv>
      {items &&
        items.map((music) =>
          music.map((music, idx) => (
              <ItemDiv key={idx}>
                <Item {...music} key={music.id} ref={ref}/>
              </ItemDiv>
          ))
          )}
          {loadingItem?loadSkeleton():"end of the page"}
      <ToTheTopButton onClick={scrollToTop}>TOP</ToTheTopButton>
    </ListDiv>
  );
};
const ItemDiv = styled.div`
  background-color: white;
  margin: 20px auto;
  width: 250px;
  height: 400px;
  box-shadow: 1px 1px 15px grey;
`;
const ListDiv = styled.div`
  width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
const ToTheTopButton = styled.button`
position: fixed;
right: 20px;
top: 20px;
  margin: 5px 2px;
  padding: 15px;
  background-color: transparent;
  width: "100px";
  font-size: 20px;
  color: #764abc;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  transition: 0.5s;
  &:hover {
    background-color: #764abc;
    color: white;
  }
`;

export default List;
