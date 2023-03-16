import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from "../img/kamar.jpeg"
import "./userCheck.css"

const UserCheck = () =>{
    return(
      <div>
        <div className='fasilitas1'>
          <div className='text'>ROOM FACILITY</div>
        <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={Image}/>
        <Card.Body>
          <Card.Title>FASILITAS KAMAR</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>KAMAR</ListGroup.Item>
          <ListGroup.Item>KAMAR MANDI</ListGroup.Item>
          <ListGroup.Item>RESTORAN</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="">KAMAR</Card.Link>
          <Card.Link href="">KAMAR MANDI</Card.Link>
          <Card.Link href="">RESTORAN</Card.Link>
        </Card.Body>
      </Card>
        </div>

      <div className='fasilitas2'>
      <div className='text'>ROOM FACILITY</div>
                <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={Image}/>
        <Card.Body>
          <Card.Title>FASILITAS KAMAR</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>KAMAR</ListGroup.Item>
          <ListGroup.Item>KAMAR MANDI</ListGroup.Item>
          <ListGroup.Item>RESTORAN</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="">KAMAR</Card.Link>
          <Card.Link href="">KAMAR MANDI</Card.Link>
          <Card.Link href="">RESTORAN</Card.Link>
        </Card.Body>
      </Card>
      </div>
      </div>
      )
    }

export default UserCheck