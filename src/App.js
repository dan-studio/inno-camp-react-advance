import './App.css';
import Main from './page/Main';
import Detail from './page/Detail'
import { Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
function App() {
  const counter = useSelector((state)=> state.counter)
  console.log(counter)
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
