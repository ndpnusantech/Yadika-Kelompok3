import { TfiFacebook } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return (
        <div className="footer" >
            <h1 className="info">Info Support Marketing</h1>
            <a href="" className="footer1"><FaWhatsapp style={{ color: 'white', background:'green',borderRadius:'3px' }} /></a>
            <a href="" className="footer1"><AiFillInstagram style={{ color: '#FFFFFF',background:'linear-gradient(#833AB4, #E1306C)',borderRadius:'3px'  }} /></a>
            <a href="" className="footer1"><TfiFacebook style={{ color: 'white', background:'blue' ,borderRadius:'3px' }} /></a>
            <br /><br />
            <h1>Terms of Use Privacy Policy <br /> © 2023 Kooheng Hotel</h1>
        </div>
    )
}

export default Footer
