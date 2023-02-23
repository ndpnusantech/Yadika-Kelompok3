import Carousel from 'react-bootstrap/Carousel';
import './style/mainHome.css'

function MainHome() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="gambar1"
          src="./images/kamar.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="gambar1"
          src="./images/kamar.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="gambar1"
          src="./images/kamar.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MainHome;