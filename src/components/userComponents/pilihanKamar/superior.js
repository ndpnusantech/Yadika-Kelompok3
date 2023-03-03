import './style/superior.css'
import { FaBed } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";

const Superior = () => {
    return(
        <div className="superior">
             <img src="./images/hotel1.jpg" className='img-superior' />
                <h2><FaBed /> Superior Room</h2>
             <div className="superior-container">
            <img src="./images/kamar1.jpg" />
            <table className='superior1'>
            <tr>
            <td><h3><b>What is in this room?</b></h3></td>
            </tr>
            <br />
            <tr>
            <td>Superior room adalah tipe kamar yang <br /> sedikit lebih baik dari tipe standard room. <br /> Perbedaannya dapat berupa dari fasilitas yang diberikan, <br /> interior kamar, atau pemandangan dari kamar.</td>
            </tr>
            <br />
            <tr>
                <td><h4><b>Other Facilities</b></h4></td>
            </tr>
            <tr>
                <td><AiOutlineWifi />Free Wifi</td>
            </tr>
            <tr>
                <td><FaBed /> Free Wifi</td>
            </tr>
            <tr>
                <td><FaBed /> Free Wifi</td>
            </tr>
            </table>
            <button className='button-superior'><a href="" className='a-superior'>Next</a></button>
             </div>
        </div>
    )
}

export default Superior