import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./datadiri.css"

const DataDiri =() => {
    return(
        <div className='datadiri'>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control placeholder="Masukan Nama Lengkap" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Tempat/Tanggal Lahir</Form.Label>
          <Form.Control placeholder="Masukan Tempat/Tanggal Lahir" />
        </Form.Group>

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
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Kamar.no</Form.Label>
            <Form.Control />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Status</Form.Label>
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
  
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </div>
    )
}
export default DataDiri
