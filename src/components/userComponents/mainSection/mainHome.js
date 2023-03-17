import Collom from "../MainPage/collom";
import Pilihan from "../MainPage/Pilihan";
import Slide from "../MainPage/preview"
import "./style/mainHome.css"

const MainHome = () => {
  return (
    <div className="mainHome">
      <>
        <Slide />
        <div className="preview-content">
        </div>
      </>
      <>
      <Collom />
      </>
      <div className="judul">
        <h1 className="text-judul">All Kinds of Rooms</h1>
        <hr className="hr-mh"/>
      </div>
      <div className="Cardss">
        <Pilihan />
      </div>
    </div>
  )
}

export default MainHome;