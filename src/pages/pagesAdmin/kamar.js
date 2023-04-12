import NavbarAdmin from "../../components/adminComponents/layouts/navbarAdmin"
import SeatList from "../../components/adminComponents/mainAdmin/seatlist"
import Seat from "../../components/adminComponents/mainAdmin/seat"
const Kamar = () => {
    return(
        <>
        <NavbarAdmin />
        <Seat />
        <SeatList />
        </>
    )
}

export default Kamar
import Navkamar from "../../components/adminComponents/layouts/navkamar";
import SeatList from "../../components/adminComponents/mainAdmin/seatlist";
const Kamar = () => {
  return (
    <>
      <Navkamar />
      <br />
      <br />
      <br />
      <SeatList />
    </>
  );
};

export default Kamar;
