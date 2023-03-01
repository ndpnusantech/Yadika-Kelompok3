import Footer from "../components/layouts/footer"
import Navbar from "../components/layouts/navbar"
import MainHome from "../components/main/mainHome"
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