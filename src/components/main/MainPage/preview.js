import Carousel from 'react-bootstrap/Carousel';
import kamar from './data/data';
import './style/preview.css'

const Slide = () => {
    return(

<Carousel style={{height: '100vh',}}>
        {kamar.map((kamar) => {
          return (
            <Carousel.Item id={kamar.id} interval={5000}>
              <img
                className="d-flex "
                src={kamar.img}
                alt="First slide"
                style={{
                  margin: 'auto', 
                  width: '100%',
                  height: '700px',
                  marginBottom: '3%',
                  objectFit: 'cover',
                }}
              />
              <div className="text">
                <p className='des1'>Luxury Room</p>
                <div className="des2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Test</button>
                </div>
                </div>
            </Carousel.Item>
          );
        })}
      </Carousel>

    )
}

export default Slide