import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { addMusic } from "../redux/module/musicSlice"; //로컬
import { createMusic } from "../redux/module/musicSlice";
import { nanoid } from "@reduxjs/toolkit";
const Form = (props) => {
  const titleInput = useRef(null);
  const artistInput = useRef(null);
  const ImgUrlInput = useRef(null);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  return (
    <Formed>
      {toggle ? (
        <div>
          <InputBox ref={artistInput} type="text" placeholder="Artist" />
          <InputBox ref={titleInput} type="text" placeholder="title" />
          <InputBox
            length="500px"
            ref={ImgUrlInput}
            type="text"
            placeholder="title"
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                createMusic({
                  id: nanoid(),
                  artist: artistInput.current.value,
                  title: titleInput.current.value,
                  coverUrl: ImgUrlInput.current.value,
                  like: false,
                  comments: [],
                })
              );
              setToggle(!toggle);
            }}
          >
            Submit
          </Button>
        </div>
      ) : null}
      <ToggleButton
        onClick={(e) => {
          e.preventDefault();
          setToggle(!toggle);
        }}
      >
        ↕️
      </ToggleButton>
    </Formed>
  );
};

export default Form;

const Formed = styled.form`
  max-width: 1200px;
  min-width: 800px;
  background-color: #ccc;
  margin: 0 auto;
`;

const InputBox = styled.input`
  padding: 8px 10px;
  background-color: #764abc;
  line-height: 20px;
  font-size: 16px;
  color: #fff;
  border-radius: 20px;
  border: none;
  outline: none;
  width: ${(props) => props.length};
  &::placeholder {
    color: #ccc;
  }
`;

const Button = styled.button`
  background-color: #764abc;
  padding: 10px;
  color: #fff;
  border-radius: 20px;
  border: none;
`;

const ToggleButton = styled.button`
  width: 50px;
  height: 30px;
  color: #fff;
  font-size: 18px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: #764abc;
`;
