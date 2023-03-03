import './style/mainAbout.css'
import Card from 'react-bootstrap/Card';
import dataPembuat from '../data/dataPembuat';
const MainAbout = () => {
    return (
        <>
            <div className="about">
                <div className="about-img">
                    <img src="./images/hotel1.jpg" className='hotel2' />
                    <div className="about-text">
                            <h3>About Kooheng</h3>
                            <h5>Mencoba melayani dengan sepenuh hati dan semaksimal mungkin</h5>
                    </div>
                </div>
                <div className='judulText0'>
                <h2>Our Staf</h2>
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
            </div>
        </>
    )
}

export default MainAbout