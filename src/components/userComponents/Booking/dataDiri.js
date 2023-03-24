import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from "../img/kamar.jpeg"
import "./datadiri.css"
const DataDiri =() => {
    return(
        <div className='awal'>
          <center>
            <h2>Standar room</h2>
          </center>
          {/* <img src="./images/hotel1.jpg" className='hotel231' /> */}
          <div className='datadiri'>
            <h2>Mengisi data diri</h2><br />
          <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control placeholder="Masukan Nama Lengkap" />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Tempat/Tanggal Lahir</Form.Label>
          <Form.Control placeholder="Masukan Tempat/Tanggal Lahir" />
        </Form.Group> */}

        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>NIK</Form.Label>
            <Form.Control type="password" placeholder="Masukan NIK" />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Alamat</Form.Label>
          <Form.Control placeholder="Masukan Alamat" />
        </Form.Group>
 
        <Row className="mb-3">
          {/* <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Kamar.no</Form.Label>
            <Form.Control />
          </Form.Group> */}
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Check in - Check Out</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Check in</option>
              <option>Check out...</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>No.HP</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        
        <Form.Group className="mb-3" controlId="formGridAddress1" height="100px">
          <Form.Label>Permintaan Khusus</Form.Label>
          <Form.Control placeholder="Permintaan khusus anda" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Metode Pembayaran</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Ditempat</option>
              <option>Transfer</option>
              <option>Cartu credit</option>
            </Form.Select>
          </Form.Group>

  
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
          </div>

      <div className='hotel'>
      <Card style={{ width: '25rem' }}>
      <Card.Img src={Image}/>
      <Card.Body>
        <Card.Title>Standar Room</Card.Title>
        <hr />
        <Card.Title>RP.200.000</Card.Title>
        <Card.Text>
        Standard Room merupakan kelas kamar terbawah dan hanya memiliki fasilitas yang terbatas, seperti tempat tidur, AC, TV, perlengkapan mandi, dan air minum 
        </Card.Text>
        <hr />
        <Card.Title>Untuk Pembayaran DP minimal 30% Dari harga</Card.Title>
        {/* <Button variant="primary">PESAN</Button> */}
      </Card.Body>
    </Card>
        </div>
        </div>
       
    )
}
export default DataDiri
