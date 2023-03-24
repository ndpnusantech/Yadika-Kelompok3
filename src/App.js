import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/pagesUser/login';
import Register from './pages/pagesUser/register';
import Home from './pages/pagesUser/home'
import UserData from './pages/pagesUser/userData'
import UserBooking from './pages/pagesUser/userBooking';
import './App.css'
import KamarStandar from './pages/pagesUser/kamarStandar';
import KamarDeluxe from './pages/pagesUser/kamarDeluxe';
import KamarSuperior from './pages/pagesUser/kamarSuperior';
import Admin from './pages/pagesAdmin/admin';
import './App.css'
import Facility from './pages/pagesUser/facilitas';
import VDeluxe from './pages/pagesUser/vDeluxe';
import VStandar from './pages/pagesUser/vStandar';
import VSuperior from './pages/pagesUser/vSuperior';
import Contact from './pages/pagesUser/contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/facility' element={<Facility />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/userData' element={<UserData />}></Route>
        <Route path='/userBooking' element={<UserBooking />}></Route>
        <Route path='/kamarStandar' element={<KamarStandar />}></Route>
        <Route path='/kamarDeluxe' element={<KamarDeluxe />}></Route>
        <Route path='/kamarSuperior' element={<KamarSuperior />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/viewDeluxe' element={<VDeluxe />}></Route>
        <Route path='/viewStandar' element={<VStandar />}></Route>
        <Route path='/viewSuperior' element={<VSuperior />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
