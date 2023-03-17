import { FaBed } from "react-icons/fa";
import './style/viewStandar.css'

const ViewStandar = () => {
    return(
    <div className="view-standar">
    <h2><FaBed /> Standar Room</h2>
    <h1>Selamat Datang Dikamar Standar Room,</h1>
    <h1>Disini kami menyediakan 2 views yang bagus dan cukup menarik untuk dilihat</h1>
    <br />
    <div className="view-standarImg">
        <div className="pantai">
        <a href="./kamarStandar"><img src="./images/Pantai.webp"/></a>
        </div>
        <div className="kota">
        <a href="./kamarStandar"><img src="./images/kota.jpg"/></a>
        </div>
    </div>
    </div>
    )
}

export default ViewStandar