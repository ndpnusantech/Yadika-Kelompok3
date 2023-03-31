<<<<<<< HEAD
import Navkamar from "../../components/adminComponents/layouts/navkamar"
import SeatList from "../../components/adminComponents/mainAdmin/seatlist"
const Kamar = () => {
    return(
        <>
        <Navkamar /><br /><br /><br />
        <SeatList />
=======
import NavbarAdmin from "../../components/adminComponents/layouts/navbarAdmin"
import MainKamar from "../../components/adminComponents/mainAdmin/mainKamar"


const Kamar = () => {
    return(
        <>
        <NavbarAdmin />
        <MainKamar />
>>>>>>> dde5785ee94bcc5df5f86cbd47ddc63af35bbf5f
        </>
    )
}

export default Kamar