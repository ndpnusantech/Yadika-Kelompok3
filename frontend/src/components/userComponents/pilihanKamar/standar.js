import './style/standar.css'
import { FaBed, FaTv } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
// import { TbAirBalloon } from "react-icons/tb";

const Standar = () => {
    return(
        <div className="standar">
                <h2><FaBed /> Standar Room</h2>
        <div className="standar-container">
            <img src="./images/kamar1.jpg" alt='#' />
            <table className='standar1'>
            <tr>
            <td><h3><b>What is in this room?</b></h3></td>
            </tr>
            <br />
            <tr>
            <td>Standard room merupakan tipe kamar hotel yang paling biasa di hotel. <br /> Umumnya, kamar tipe ini memiliki harga yang cukup murah. <br /> Fasilitasnya pun terbatas,  seperti kasur ukuran queen size. <br /> Meski begitu, standard room di setiap hotel berbeda, apalagi kalau memiliki bintang <br /> yang berbeda pula.</td>
            </tr>
            <br />
            <tr>
                <td><h4><b>Other Facilities</b></h4></td>
            </tr>
            <tr>
                <td><AiOutlineWifi />Free Wifi</td>
            </tr>
                <td><BsFillTelephoneFill /> Telephone</td>
            <tr>
                <td><FaBed /> Queen Bed</td>
            </tr>
            <tr>
                <td><FaTv /> TV</td>
            </tr>
            <tr>
                {/* <td><TbAirBalloon /> AC</td> */}
            </tr>
            </table>
            <button className='standara'><a href="./UserData" className='standar-a'>Next</a></button>
             </div>
        </div>
    )
}

export default Standar