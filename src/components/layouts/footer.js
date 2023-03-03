import { TfiFacebook } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return(
        <div className="footer" >
            <p className="txt1">Info Lebih Lanjut Hubungi Marketing Kami:</p>
            <a href="" className="icon1"><TfiFacebook/></a>
            <a href="" className="icon2"><AiFillInstagram/></a>
            <a href="" className="icon3"><FaWhatsapp/></a>
            <p className="txt2"> © 2023 Kooheng Hotel</p>
        </div>
    )
}

export default Footer

            {/* <a href="" className="footer1"><FaWhatsapp style={{color: 'black'}} /></a>
            <a href="" className="footer2"><AiFillInstagram style={{color: 'black'}} /></a>
            <a href="" className="footer3"><TfiFacebook style={{color: 'black'}} /></a>
            <br /><br />
            <h1>Info Support Marketing <br /><br /> Terms of Use Privacy Policy <br /><br /> © 2023 Kooheng Hotel</h1>
            <br /> */}