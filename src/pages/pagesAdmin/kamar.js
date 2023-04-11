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