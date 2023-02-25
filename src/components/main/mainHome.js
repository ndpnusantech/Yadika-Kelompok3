import Pilihan from "./MainPage/Pilihan";
import Slide from "./MainPage/preview"
import "./style/mainHome.css"

const MainHome = () => {
  return (
    <div>
      <>
        <Slide />
      </>
      <div className="judul">
        <h1 className="text-judul">All Kinds of Rooms</h1>
        <hr />
      </div>
      <div className="Cardss">
        <Pilihan />
      </div>
    </div>
  )
}

export default MainHome;