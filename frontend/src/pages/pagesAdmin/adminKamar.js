import NavbarAdmin from "../../components/adminComponents/layouts/navbarAdmin"
import SeatList from "../../components/adminComponents/mainAdmin/mainKamar"
import Seat from "../../components/adminComponents/mainAdmin/seat"

const KamarAdmin = () => {
    return(
        <>
        <NavbarAdmin />
        <Seat />
        <SeatList />
        </>
    )
}

export default KamarAdmin