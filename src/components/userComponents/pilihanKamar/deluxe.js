import './style/deluxe.css'
import { FaBed } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";

const Deluxe = () => {
    return(
        <div className="deluxe">
             <img src="./images/hotel1.jpg" className='hotel231' />
                <h2><FaBed /> Deluxe Room</h2>
             <div className="deluxe-container">
            <img src="./images/kamar1.jpg" />
            <table className='deluxe1'>
            <tr>
            <td><h3><b>What is in this room?</b></h3></td>
            </tr>
            <br />
            <tr>
            <td>Di atas tipe kamar hotel superior room adalah deluxe room. <br /> Kamar ini tentu memiliki kamar yang lebih besar. <br /> Tersedia pilihan kasur yang bisa kamu pilih, <br /> double bed atau twin bed. Biasanya, <br /> dari segi interior kamar ini terkesan lebih mewah.</td>
            </tr>
            <br />
            <tr>
                <td><h4><b>Other Facilities</b></h4></td>
            </tr>
            <tr>
                <td><AiOutlineWifi /> Free Wifi</td>
            </tr>
            <tr>
                <td><FaBed /> Free Wifi</td>
            </tr>
            <tr>
                <td><FaBed /> Free Wifi</td>
            </tr>
            </table>
            <button className='button-deluxe'><a href="" className='a-deluxe'>Next</a></button>
             </div>
        </div>
    )
}

export default Deluxe