import "./App.css";
import Main from "./page/Main";
import Detail from "./page/Detail";
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { __getMusic } from "./redux/module/musicSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(__getMusic())
  },[dispatch])

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
