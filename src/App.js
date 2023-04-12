import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/pagesUser/home";
import Facility from "./pages/pagesUser/facilitas";
import Contact from "./pages/pagesUser/contact";
import Login from "./pages/pagesUser/login";
import Register from "./pages/pagesUser/register";
import UserData from "./pages/pagesUser/userData";
import UserBooking from "./pages/pagesUser/userBooking";
import KamarStandar from "./pages/pagesUser/kamarStandar";
import KamarDeluxe from "./pages/pagesUser/kamarDeluxe";
import KamarSuperior from "./pages/pagesUser/kamarSuperior";
import KamarCenter from "./components/userComponents/pilihanKamar/kamarCenter";
import Valentineoffering from "./components/userComponents/descOffering/valentineOffering";
//admin
import AdminDasboard from "./pages/pagesAdmin/adminDasboard";
import LoginAdmin from "./pages/pagesAdmin/adminLogin";
import KamarAdmin from "./pages/pagesAdmin/adminKamar";
import AdminReservasi from "./pages/pagesAdmin/adminReservasi";

const App = () => {
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
        <Route path='/valentineoffering' element={<Valentineoffering />}></Route>
        <Route path='/kamarCenter' element={<KamarCenter />}></Route>
        {/* admin */}
        <Route path='/adminDashboard' element={<AdminDasboard />}></Route>
        <Route path='/adminKamar' element={<KamarAdmin />}></Route>
        <Route path='/adminLogin' element={<LoginAdmin />}></Route>
        <Route path='/adminReservasi' element={<AdminReservasi />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
