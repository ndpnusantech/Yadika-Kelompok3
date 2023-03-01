import Collom from "./MainPage/collom";
// import Desc from "./MainPage/desc";
import Pilihan from "./MainPage/Pilihan";
import Slide from "./MainPage/preview"
import "./style/mainHome.css"

const MainHome = () => {
  return (
    <div>
      <>
        <Slide />
        <div className="preview-content">
        </div>
      </>
      <div className="judul">
        <h1 className="text-judul">All Kinds of Rooms</h1>
        <hr />
      </div>
      <div className="Cardss">
        <Pilihan />
      </div>
      <>
      <Collom />
      </>
    </div>
  )
}

export default MainHome;