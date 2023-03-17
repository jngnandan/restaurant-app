import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter, Routers, Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
