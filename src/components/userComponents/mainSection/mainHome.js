import Collom from "../MainPage/collom";
import Offering from "../MainPage/offer";
// import Desc from "./MainPage/desc";
import Pilihan from "../MainPage/Pilihan";
import Slide from "../MainPage/preview"
import "./style/mainHome.css"

const MainHome = () => {
  return (
    <div>
      <>
        <Slide />
        <div className="preview-content">
        </div>
      </>
      <>
      <Collom />
      </>
      <>
      <Offering />
      </>
      <div className="judul">
        <h1 className="text-judul">All Kinds of Rooms</h1>
        <hr />
      </div>
      <div className="Cardss">
        <Pilihan />
        <br />
      </div>
      <div className="but-more">
        <center>
      <button>See more</button>
      </center>
      </div>
    </div>
  )
}

export default MainHome;