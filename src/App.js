import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/pagesUser/about'
import Restaurants from './pages/pagesUser/restaurants'
import Login from './pages/pagesUser/login';
import Register from './pages/pagesUser/register';
import Home from './pages/pagesUser/home'
import UserData from './pages/pagesUser/userData'
import KamarStandar from './pages/pagesUser/kamarStandar';
import KamarDeluxe from './pages/pagesUser/kamarDeluxe';
import KamarSuperior from './pages/pagesUser/kamarSuperior';
import Admin from './pages/pagesAdmin/admin';
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
        <Route path='/userData' element={<UserData />}></Route>
        <Route path='/kamarStandar' element={<KamarStandar />}></Route>
        <Route path='/kamarDeluxe' element={<KamarDeluxe />}></Route>
        <Route path='/kamarSuperior' element={<KamarSuperior />}></Route>
        <Route path='/admin' element={<Admin />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
