import Footer from "../../components/userComponents/layouts/footer"
import Navbar from "../../components/userComponents/layouts/navbar"
import DataDiri from "../../components/userComponents/Booking/dataDiri"

const UserData = () => {
    return(
        <div className="abo">
            <Navbar />
            <DataDiri /><br /><br /><br /><br /><br />
            <Footer />
        </div>
    )
}

export default UserData