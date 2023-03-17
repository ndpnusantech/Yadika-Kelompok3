import './style/viewDeluxe.css'
import { FaBed } from "react-icons/fa";

const ViewDeluxe = () => {
    return (
        <div className="view-deluxe">
        <h2><FaBed /> Standar Room</h2>
        <h1>Selamat Datang Dikamar Standar Room,</h1>
        <h1>Disini kami menyediakan 2 views yang bagus dan cukup menarik untuk dilihat</h1>
        <br />
        <div className="view-deluxeImg">
            <a href="./kamarDeluxe"><img src="./images/Pantai.webp"/></a>
            <a href="./kamarDeluxe"><img src="./images/kota.jpg"/></a>
        </div>
        </div>
    )
}

export default ViewDeluxe