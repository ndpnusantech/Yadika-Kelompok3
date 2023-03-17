import './style/mainAbout.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const MainAbout = () => {
    return (
        <>
            <div className="contact">
                <img src="./images/hotel1.jpg" alt="" />
            </div>
            <div className="bebas">
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control placeholder="Masukan Nama Lengkap" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>No.HP</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </div>
        </>
    )
}

export default MainAbout