import { TfiFacebook } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return (
        <div className="footer" >
            <a href="" className="footer1"><FaWhatsapp style={{ color: 'black' }} /></a>
            <a href="" className="footer2"><AiFillInstagram style={{ color: 'black' }} /></a>
            <a href="" className="footer3"><TfiFacebook style={{ color: 'black' }} /></a>
            <br /><br />
            <h1>Info Support Marketing <br />Terms of Use Privacy Policy <br /> © 2023 Kooheng Hotel</h1>
        </div>
    )
}

export default Footer
