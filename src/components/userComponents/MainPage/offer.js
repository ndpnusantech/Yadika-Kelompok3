import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Special from '../data/data-offer';
import './style/offer.css'

const Penawaran = () => {
    return(
        <center>
            <div className="offer-text">
        <h3>
            Offering
        </h3><br />
        {/* <p>Kooheng make a offering for you</p> */}
        </div>
        <div className="offer-card">
                    {Special.map((card) => (
                        <Card key={card.id} style={{ width: '18rem' ,}}>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body style={{ height: '150px'}}>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                                <Card.Text>{card.content}</Card.Text>
                                <Button variant="primary"><a href={card.ahref}>Learn More</a></Button>
                            </Card.Body>
                        </Card>
                    ))}
        </div>
        </center>
    )
}

export default Penawaran