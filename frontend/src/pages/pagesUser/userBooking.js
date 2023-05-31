import Footer from "../../components/userComponents/layouts/footer"
import Navbar from "../../components/userComponents/layouts/navbar"
import UserCheck from "../../components/userComponents/Booking/userCheck"

const UserBooking = () => {
    return(
        <div className="bebas">
            <Navbar />
            <UserCheck /><br /><br /><br />
            <Footer />
        </div>
    )
}

export default UserBooking