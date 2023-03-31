import './style/mainContact.css'
import { Form , Col, Button} from 'react-bootstrap';



const MainContact = () => {
    return (
        <>
        <div className="mainContact">
            <img src="./images/hotel1.jpg" alt="" />
            <h1>Contact</h1>
        </div>
        <div className="input">
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control placeholder="Masukan Nama Lengkap Anda" />
        </Form.Group>
        <Form>
        <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>No.HP</Form.Label>
            <Form.Control type="number" placeholder="Masukan Nomer Handpone Anda"/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukan Email Anda" />
          </Form.Group>
          </Form>
          <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Permintaan Khusus</Form.Label>
          <Form.Control placeholder="Permintaan khusus anda" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
        </>
    )
}

export default MainContact
            {/* <div className="about">
                <div className="about-img">
                    <div className="about-text">
                            <h3>About Kooheng</h3>
                            <h5>Mencoba melayani dengan sepenuh hati dan semaksimal mungkin</h5>
                    </div>
                </div>
                <div className='judulText0'>
                <h2>Our Staf</h2>
                <hr />
                </div>
                <div className='about-bootsrap'>
                    {dataPembuat.map((card1) => (
                        <Card key={card1.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card1.image} />
                            <Card.Body>
                                <Card.Title>{card1.title}</Card.Title>
                                <Card.Text>{card1.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div> */}