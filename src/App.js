import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/pagesUser/login";
import Register from "./pages/pagesUser/register";
import Home from "./pages/pagesUser/home";
import UserData from "./pages/pagesUser/userData";
import UserBooking from "./pages/pagesUser/userBooking";
import "./App.css";
import KamarStandar from "./pages/pagesUser/kamarStandar";
import KamarDeluxe from "./pages/pagesUser/kamarDeluxe";
import KamarSuperior from "./pages/pagesUser/kamarSuperior";
import Admin from "./pages/pagesAdmin/admin";
// import Kamar from "./pages/pagesAdmin/kamar";
import "./App.css";
import "./App.css";
import Facility from "./pages/pagesUser/facilitas";
// import VDeluxe from './pages/pagesUser/vDeluxe';
// import VStandar from './pages/pagesUser/vStandar';
// import VSuperior from './pages/pagesUser/vSuperior';
import Contact from "./pages/pagesUser/contact";
import KamarCenter from "./components/userComponents/pilihanKamar/kamarCenter";
import Kamar from "./pages/pagesAdmin/kamar";
import Valentineoffering from "./components/descOffering/valentineOffering";
import ReservasiSection from "./components/adminComponents/mainSectionAdmin/reservasiSection";
import Navtest from "./pages/pagesAdmin/navtest";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/facility" element={<Facility />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/userData" element={<UserData />}></Route>
          <Route path="/userBooking" element={<UserBooking />}></Route>
          <Route path="/kamarStandar" element={<KamarStandar />}></Route>
          <Route path="/kamarDeluxe" element={<KamarDeluxe />}></Route>
          <Route path="/kamarSuperior" element={<KamarSuperior />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          {/* <Route path="/kamar" element={<Kamar />}></Route> */}
          {/* <Route path="/viewDeluxe" element={<VDeluxe />}></Route> */}
          <Route path="/KamarCenter" element={<KamarCenter />}></Route>
          <Route path="/adminKamar" element={<Kamar />}></Route>
          <Route path="/valentineOffering" element={<Valentineoffering />}></Route>
          <Route path="/reservasi" element={<ReservasiSection />}></Route>
          <Route path="/test" element={<Navtest />}></Route>
          {/* <Route path='/viewDeluxe' element={<VDeluxe />}></Route>
        <Route path='/viewStandar' element={<VStandar />}></Route>
        <Route path='/viewSuperior' element={<VSuperior />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
