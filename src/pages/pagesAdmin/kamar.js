import Navkamar from "../../components/adminComponents/layouts/navkamar"
import SeatList from "../../components/adminComponents/mainAdmin/seatlist"
const Kamar = () => {
    return(
        <>
        <Navkamar /><br /><br /><br />
        <SeatList />
import NavbarAdmin from "../../components/adminComponents/layouts/navbarAdmin"
import MainKamar from "../../components/adminComponents/mainAdmin/mainKamar"


const Kamar = () => {
    return(
        <>
        <NavbarAdmin />
        <MainKamar />
        </>
    )
}

export default Kamar