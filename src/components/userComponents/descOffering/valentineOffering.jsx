import Footer from '../layouts/footer'
import Navbar from '../layouts/navbar'
import './valentineOffering.css'
// import './layouts/navbar.css'

const Valentineoffering = () =>{
    return(
        <div className="container-descoffering">
            <Navbar />
            <div className="container-valentine">
            <div className="valentine-imagedesc">
                <h2>Promo for Valentine</h2> 
        <img src="./images/promoBanner.webp" alt="" />
        </div>
        <center>
            <h3 className='judul-valentine'>Valentine</h3>   
            </center>
        <div className="card-offering">
            <div className="card-descoffering">
            <img src="./images/valentine.jpg" alt="" style={{height : '400px'}}/>
            </div>
        <div className="descOffer">
            <p>Rencanakan liburan Valentine yang menyenangkan dan romantis di hotel kami. Kami menawarkan paket istimewa termasuk akomodasi, makanan dan minuman, serta banyak fasilitas yang akan membuat hari Anda semakin berkesan</p>
            <p>Dimulai dari harga Rp.320.000/Malam</p>
            <div className="kontak-offer">
            <p>Hubungi kami di</p>
            <hr />
            <p>Muhamad Afif Mustafa</p>
            <h3>+62 xxxx xxxx</h3>
            </div>
        </div>
            </div>
        <div className="fasilitas-valentine">
            <h3>Memberikan</h3>
            <ol>
                <li>diskon 14% untuk pembelian kamar deluxe di tanggal 14 Februari.</li>
                <li>Kamar juga dapat dilengkapi dengan bunga, cokelat, dan pernak-pernik valentine lainnya untuk memberikan pengalaman yang lebih istimewa.</li>
                <li>kamar yang telah dihias dan didekorasi dengan tema valentine yang romantis. Kamar juga dapat dilengkapi dengan bunga, cokelat, dan pernak-pernik valentine lainnya untuk memberikan pengalaman yang lebih istimewa.</li>
            </ol>
        </div>  
        </div>
        <Footer />
        </div>
    )}

    export default Valentineoffering