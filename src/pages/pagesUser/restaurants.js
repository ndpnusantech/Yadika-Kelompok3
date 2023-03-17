import Footer from "../../components/userComponents/layouts/footer"
import Navbar from "../../components/userComponents/layouts/navbar"
import MainFasilitas from "../../components/userComponents/mainSection/mainFasilitas"
import MainFasilitas2 from "../../components/userComponents/mainSection/mainFasilitas2"
// import MainRestaurants from "../../components/userComponents/mainSection/mainRestaurants"

const Restaurants = () => {
    return(
        <div className="abo">
            <Navbar />
            {/* <MainRestaurants /> */}
            <MainFasilitas />
            <MainFasilitas2 />
            <Footer />
        </div>
    )
}

export default Restaurants