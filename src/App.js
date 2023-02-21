import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/pages/about'
import Home from './components/pages/home'
import Restaurants from './components/pages/restaurants'
import Login from './components/pages/login';
import Register from './components/pages/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/restaurants' element={<Restaurants />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
