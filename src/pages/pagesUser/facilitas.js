import Footer from "../../components/userComponents/layouts/footer"
import Navbar from "../../components/userComponents/layouts/navbar"
import MainFasilitas from "../../components/userComponents/mainSection/mainFasilitas"
import MainFasilitas2 from "../../components/userComponents/mainSection/mainFasilitas2"

const Facility = () => {
    return(
        <div className="abo">
            <Navbar />
            <MainFasilitas />
            <MainFasilitas2 />
            <Footer />
        </div>
    )
}

export default Facility