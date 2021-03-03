import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
const style={
    height:'60vh',
    objectFit: 'cover',
    backgroundPosition: "center top"
}
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
      return (
        <Carousel activeIndex={index} onSelect={handleSelect} indicators fade={true}>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              style={style}
              src={process.env.PUBLIC_URL+'/images/purple-home.jpg'}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              style={style}
              src={process.env.PUBLIC_URL+'/images/blue-home.jpg'}
              alt="second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              style={style}
              src={process.env.PUBLIC_URL+'/images/roofer-2.jpg'}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
}
  
export default ControlledCarousel ;