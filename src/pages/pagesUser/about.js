import Footer from "../../components/userComponents/layouts/footer"
import Navbar from "../../components/userComponents/layouts/navbar"
import MainAbout from "../../components/userComponents/mainSection/mainAbout"


const About = () => {
    return(
        <div className="abo">
            <Navbar />
            <MainAbout />
            <Footer />
        </div>
    )
}

export default About