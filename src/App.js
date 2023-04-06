import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/pagesUser/home'
import Contact from './pages/pagesUser/contact';
import Facility from './pages/pagesUser/facilitas'; 
import Login from './pages/pagesUser/login';
import Register from './pages/pagesUser/register';
import UserData from './pages/pagesUser/userData'
import UserBooking from './pages/pagesUser/userBooking';
import KamarStandar from './pages/pagesUser/kamarStandar';
import KamarDeluxe from './pages/pagesUser/kamarDeluxe';
import KamarSuperior from './pages/pagesUser/kamarSuperior';
import Admin from './pages/pagesAdmin/admin';
import Kamar from './pages/pagesAdmin/kamar';
import './App.css' 
import Facility from './pages/pagesUser/facilitas';
// import VDeluxe from './pages/pagesUser/vDeluxe';
// import VStandar from './pages/pagesUser/vStandar';
// import VSuperior from './pages/pagesUser/vSuperior';
import Contact from './pages/pagesUser/contact';
import KamarCenter from './components/userComponents/pilihanKamar/kamarCenter';
import Valentineoffering from './components/descOffering/valentineOffering';
import Admin from './pages/pagesAdmin/admin';
import Kamar from './pages/pagesAdmin/kamar';
import LoginA from './pages/pagesAdmin/loginA';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/facility' element={<Facility />}></Route>
        <Route path='/userLogin' element={<Login />}></Route>
        <Route path='/userRegister' element={<Register />}></Route>
        <Route path='/userData' element={<UserData />}></Route>
        <Route path='/userBooking' element={<UserBooking />}></Route>
        <Route path='/kamarStandar' element={<KamarStandar />}></Route>
        <Route path='/kamarDeluxe' element={<KamarDeluxe />}></Route>
        <Route path='/kamarSuperior' element={<KamarSuperior />}></Route>
        <Route path='/valentineOffering' element={<Valentineoffering />}></Route>
        <Route path='/kamarCenter' element={<KamarCenter />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/kamar' element={<Kamar />}></Route>
        <Route path='/viewDeluxe' element={<VDeluxe />}></Route>
        <Route path='/KamarCenter' element={<KamarCenter />}></Route>
        <Route path='/adminKamar' element={<Kamar />}></Route>
        <Route path='/adminLogin' element={<LoginA />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
