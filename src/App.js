import './App.css';
import Main from './page/Main';
import Detail from './page/Detail'
import { Routes, Route} from 'react-router-dom'
import React from "react";

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
