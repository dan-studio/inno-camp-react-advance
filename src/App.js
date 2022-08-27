import './App.css';
import Main from './page/Main';
import Detail from './page/Detail'
import { Routes, Route} from 'react-router-dom'

<<<<<<< HEAD
import Form from './components/Form';

=======
>>>>>>> 1cf0e1854625412c6f7d54710bf0aed2bbe6eaa5
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
