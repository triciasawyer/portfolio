import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './projects.css';

const Project = ({ title, date, languages, details, images }) => {
    return (
        <>
            <div className="project-carousel-container">
                <Carousel>
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img className="project-img" src={image} alt={`Project ${index + 1}`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default Project;
