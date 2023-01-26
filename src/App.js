// import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/pokemon/:name' element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
