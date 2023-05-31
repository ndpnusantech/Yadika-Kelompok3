import Footer from "../../components/userComponents/layouts/footer"
import Navbar from "../../components/userComponents/layouts/navbar"
import ViewSuperior from "../../components/userComponents/pilihanView/viewSuperior"

const VSuperior = () => {
    return(
        <div className="">
            <Navbar />
            <ViewSuperior />
            <Footer />
        </div>
    )
}

export default VSuperior