// import './style/standar.css'
// import { FaBed, FaTv } from "react-icons/fa";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { AiOutlineWifi } from "react-icons/ai";
// import { TbAirBalloon } from "react-icons/tb";"
import './style/kamarCenter.css'
import Navbar from "../layouts/navbar"
import Footer from "../layouts/footer"

const KamarCenter = () => {
    return(
        <div className="kamarCenter">
            <>
            <Navbar />
            </>
            <center>
            <h3 style={{marginTop : '10px'}}>Our Kind Of rooms</h3>
            </center>
            <div className="centerContainer">
                <center>
                    <div className="centerStandar">
                        <h3>Standar Room</h3>
                        <div className="centerStandar1">
                    <img src="./images/kamar1.jpg" alt="" />
                    <button>See more</button>
                    </div>
                    <p>Standard room merupakan tipe kamar hotel yang paling biasa di hotel. <br /> Umumnya, kamar tipe ini memiliki harga yang cukup murah. <br /> Fasilitasnya pun terbatas,  seperti kasur ukuran queen size. <br /> Meski begitu, standard room di setiap hotel berbeda, apalagi kalau memiliki bintang <br /> yang berbeda pula.</p>
                    </div>
                    <div className="centerDeluxe">
                    <h3>Deluxe Room</h3>
                    <div className="centerDeluxe1">
                    <img src="./images/kamar1.jpg" alt="" />
                    <button>See more</button>
                    </div>
                    <p>Di atas tipe kamar hotel superior room adalah deluxe room. <br /> Kamar ini tentu memiliki kamar yang lebih besar. <br /> Tersedia pilihan kasur yang bisa kamu pilih, <br /> double bed atau twin bed. Biasanya, <br /> dari segi interior kamar ini terkesan lebih mewah.</p>
                    </div>
                    <div className="centerSuperior">
                    <h3>Superior Room</h3>
                    <div className="centerSuperior1">
                    <img src="./images/kamar1.jpg" alt="" />
                    <button>See more</button>
                    </div>
                    <p>Superior room adalah tipe kamar yang <br /> sedikit lebih baik dari tipe standard room. <br /> Perbedaannya dapat berupa dari fasilitas yang diberikan, <br /> interior kamar, atau pemandangan dari kamar.</p>
                    </div>
                </center>
            </div>
            <>
            <Footer />
            </>
        </div>
    )
}

export default KamarCenter