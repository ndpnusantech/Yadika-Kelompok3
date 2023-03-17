import Collom from "../MainPage/collom";
import Penawaran from "../MainPage/offer";
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
      <Penawaran />
      </>
      <div className="judul">
        <h1 className="text-judul">All Kinds of Rooms</h1>
        <hr className="hr-mh"/>
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