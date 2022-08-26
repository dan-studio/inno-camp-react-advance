import React, { useState } from "react";
import styled from "styled-components";

const Form = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Formed>
      <div>
        <InputBox type="text" placeholder="Artist" />
        <InputBox type="text" placeholder="title" />
        <Button>Submit</Button>
      </div>

      <div></div>
      <ToggleButton
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        -
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
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: #764abc;
`;
