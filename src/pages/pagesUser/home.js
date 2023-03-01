import Footer from "../../components/userComponents/layouts/footer"
import Navbar from "../../components/userComponents/layouts/navbar"
import MainHome from "../../components/userComponents/mainSection/mainHome"
// import Desc from "../components/main/MainPage/desc"



const Home = () => {
    return(
      <div className="home">
      <Navbar />
        {/* <Desc /> */}
      <MainHome />
      <Footer />
      </div>
    )
    }
export default Home   