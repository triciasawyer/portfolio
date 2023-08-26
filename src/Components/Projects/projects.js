import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './projects.css';

const Project = ({ images }) => {
    return (
        <>
            <div className="project-carousel-container">
                <Carousel>
                    {images.map((image, index) => (
                        <Carousel.Item className="carousels" key={index}>
                            <img className="project-img" src={image} alt={`Project ${index + 1}`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default Project;
