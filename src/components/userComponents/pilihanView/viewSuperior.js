import { FaBed } from "react-icons/fa";
import './style/viewSuperior.css'

const ViewSuperior = () => {
    return(
        <div className="view-superior">
        <h2><FaBed /> Superior Room</h2>
        <h1>Selamat Datang Dikamar Superior Room,</h1>
        <h1>Disini kami menyediakan 2 views yang bagus dan cukup menarik untuk dilihat</h1>
        <br />
        <div className="view-superiorImg">
            <div className="pantai-super">
            <a href="./kamarSuperior"><img src="./images/Pantai.webp"/></a>
            <h2>Pantai</h2> 
            </div>
            <div className="kota-super">
            <a href="./kamarSuperior"><img src="./images/kota.jpg"/></a>
            <h2>Kota</h2>
            </div>
        </div>
        </div>
    )
}

export default ViewSuperior