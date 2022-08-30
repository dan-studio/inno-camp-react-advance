import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { addMusic } from "../redux/module/musicSlice"; //로컬
import { __addMusic } from "../redux/module/musicSlice";
import { nanoid } from "@reduxjs/toolkit";
import AllRounderButton from "./AllRounderButton";

const Form = (props) => {
  const titleInput = useRef(null);
  const artistInput = useRef(null);
  const ImgUrlInput = useRef(null);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [formHelper, setFormHelper] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if(!artistInput.current.value){return setFormHelper("You Must Enter Artist to Proceed")}
    if(!titleInput.current.value){return setFormHelper("You Must Enter Title to Proceed")}
    if(!ImgUrlInput.current.value){return setFormHelper("You Must Enter Image URL to Proceed")}
    dispatch(
      __addMusic({
        id: nanoid(),
        artist: artistInput.current.value,
        title: titleInput.current.value,
        coverUrl: ImgUrlInput.current.value,
        like: false,
        comment: [],
      })
    );
    setToggle(!toggle);
  }
  return (
    <>
    <Formed>
      {toggle ? (
        <div>
          <FormHelper>{formHelper}</FormHelper>
          <InputBox
            length="300px"
            ref={artistInput}
            type="text"
            placeholder="Artist"
          />
          <InputBox
            length="300px"
            ref={titleInput}
            type="text"
            placeholder="Title"
          />
          <InputBox
            length="500px"
            ref={ImgUrlInput}
            type="text"
            placeholder="Cover URL"
          />
          <AllRounderButton
            onClick={submitHandler}
            buttonName={"Submit"}
          />
        </div>
      ) : null}
    </Formed>
      {toggle ? (
        <AllRounderButton
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
            setFormHelper("")
          }}
          buttonName={"Close"}
        />
      ) : (
        <AllRounderButton
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
          }}
          buttonName={"Open Form"}
        />
      )}
    </>
  );
};

export default Form;

const Formed = styled.form`
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 5px 5px 10px #999;
`;

const InputBox = styled.input`
  margin: 20px;
  padding: 8px 10px;
  font-size: 20px;
  border: none;
  text-align: center;
  :focus {
    outline: none;
  }
  width: ${(props) => props.length};
  &::placeholder {
    color: #aaa;
  }
`;
const FormHelper = styled.div`
margin-top: 10px;
font-size: 20px;
color: #fa1e2d;
`