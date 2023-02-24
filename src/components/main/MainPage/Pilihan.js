import './style/pilihan.css'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Pilihan = () => {
    return (
        <div className="card1">
            <Row className="naon">
                <Col>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src="./images/kamar.jpeg" />
                        <Card.Body>
                            <Card.Title>Standar Room</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default Pilihan