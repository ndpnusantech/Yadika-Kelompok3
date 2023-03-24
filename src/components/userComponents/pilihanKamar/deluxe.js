import './style/deluxe.css'
import { FaBed } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";

const Deluxe = () => {
    return(
        <div className="deluxe">
                <h2><FaBed /> Deluxe Room</h2>
             <div className="deluxe-container">
                <div className="gambar-deluxe">
            <img src="./images/kamar1.jpg" alt=''/>
            </div>
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
                <td><h3><b>Views</b></h3></td>
            </tr>
            <tr>
                <td>Views yang menghadap langsung kepaparan pasir pantai dan luasnya lautan</td>
            </tr><br />
            <div className="deluxe-pantai">
            <tr>
            <td><img src="./images/pantai.webp" alt="" style={{width : '230px'}} /></td>
            </tr><br />
            </div>
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
            <button className='button-deluxe'><a href="./UserData" className='a-deluxe'>Next</a></button>
             </div>
        </div>
    )
}

export default Deluxe