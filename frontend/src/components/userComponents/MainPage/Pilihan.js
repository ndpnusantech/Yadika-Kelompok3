import './style/pilihan.css'
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import data from '../data/dataPilihan';

const Pilihan = () => {
    return (
        <div className="card-container ">
                    {data.map((card) => (
                        <Card key={card.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                                <Button variant="primary" className='button-pilihan'><a href={card.ahref} className='a-pilhan'>Lean More</a></Button>
                            </Card.Body>
                        </Card>
                    ))}
        </div>
    )
}

export default Pilihan