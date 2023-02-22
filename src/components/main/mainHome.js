import Carousel from 'react-bootstrap/Carousel';


const MainHome = () => {
    return(
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/hotel2.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Hotel.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    )
}

export default MainHome