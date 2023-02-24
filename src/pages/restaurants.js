import Footer from "../components/layouts/footer"
import Navbar from "../components/layouts/navbar"
import MainRestaurants from "../components/main/mainRestaurants"

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