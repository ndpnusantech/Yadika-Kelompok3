import Carousel from 'react-bootstrap/Carousel';
import kamar from './data';

const Slide = () => {
    return(

<Carousel>
        {kamar.map((kamar) => {
          return (
            <Carousel.Item id={kamar.id} interval={5000}>
              <img
                className="d-flex "
                src={kamar.img}
                alt="First slide"
                style={{
                  paddingTop: '20px',
                  margin: 'auto', 
                  width: '83%',
                  height: '565px',
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