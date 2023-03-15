import Footer from "../../components/userComponents/layouts/footer"
import Navbar from "../../components/userComponents/layouts/navbar"
import MainHome from "../../components/userComponents/mainSection/mainHome"



const Home = () => {
    return(
      <div className="home">
      <Navbar />
      <MainHome />
      <Footer />
      </div>
    )
    }
export default Home   