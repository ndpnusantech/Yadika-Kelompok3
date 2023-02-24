import Carousel from 'react-bootstrap/Carousel';
import kamar from './data';

const Slide = () => {
    return(

<Carousel style={{height: '150vh',}}>
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
                  height: '100%',
                  marginBottom: '3%',
                  objectFit: 'cover',
                }}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>

    )
}

export default Slide