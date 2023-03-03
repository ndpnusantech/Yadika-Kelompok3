import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/pagesUser/about'
import Restaurants from './pages/pagesUser/restaurants'
import Login from './pages/pagesUser/login';
import Register from './pages/pagesUser/register';
import Home from './pages/pagesUser/home'
import KamarStandar from './pages/pagesUser/kamarStandar';
import KamarDeluxe from './pages/pagesUser/kamarDeluxe';
import KamarSuperior from './pages/pagesUser/kamarSuperior';
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
        <Route path='/kamarStandar' element={<KamarStandar />}></Route>
        <Route path='/kamarDeluxe' element={<KamarDeluxe />}></Route>
        <Route path='/kamarSuperior' element={<KamarSuperior />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
