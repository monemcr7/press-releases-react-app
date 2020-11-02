import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
    return (
        <Carousel>
            <Carousel.Item interval={50000}>
                <div className="img-content">
                     <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/assets/images/slide1.png"}
                alt="First slide"
                />
                </div>
                <Carousel.Caption>
                <h3>Al Foundation</h3>
                <p>is focused on inspiring the next generation of  kids Healthcare professionals.</p>
                <a href="#" className="btn btn-light">Donate Now</a>
                </Carousel.Caption>
                
            </Carousel.Item>
              <Carousel.Item interval={50000}>
                <div className="img-content">
                     <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/assets/images/Rectangle.png"}
                alt="First slide"
                />
                </div>
                <Carousel.Caption >
                <h3>Al Foundation</h3>
                <p>is focused on inspiring the next generation of  kids Healthcare professionals.</p>
                <a href="#" className="btn btn-light">Donate Now</a>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    )
}

export default Carousels;