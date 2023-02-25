import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/about'
import Restaurants from './pages/restaurants'
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
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
