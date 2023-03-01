import Footer from "../../components/userComponents/layouts/footer"
import Navbar from "../../components/userComponents/layouts/navbar"
import MainRestaurants from "../../components/userComponents/mainSection/mainRestaurants"

const Restaurants = () => {
    return(
        <div className="abo">
            <Navbar />
            <MainRestaurants />
            <Footer />
        </div>
    )
}

export default Restaurants