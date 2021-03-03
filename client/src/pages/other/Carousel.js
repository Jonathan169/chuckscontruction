import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const style={
    height:'60vh',
    objectFit: 'cover'
}
class ControlledCarousel extends React.Component {
    render() {
  
      return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={style}
              src={process.env.PUBLIC_URL+'/assets/images/summer.jpg'}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="homePara"
              style={style}
              src={process.env.PUBLIC_URL+'/assets/images/fall.jpg'}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={style}
              src={process.env.PUBLIC_URL+'/assets/images/winter.jpg'}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
export default ControlledCarousel ;