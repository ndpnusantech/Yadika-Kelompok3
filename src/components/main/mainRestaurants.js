import './style/mainRestaurants.css'
import React from 'react';
import { Card } from 'react-bootstrap';
import data from '../main/MainPage/data/dataMenu';


const MainRestaurants = () => {
    return(
        <div className="menu">
            <img className='Menu-img' src='./images/hotel1.jpg'/>
            <div className="g">
            <h1 className='icon'><span></span>Food And Drink Menu</h1>
            </div>
            <ul className='p'>
            {data.map((card) => (
                        <Card key={card.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title>{card.harga}</Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
            </ul>
        </div>
    )
}

export default MainRestaurants