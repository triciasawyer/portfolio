import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './projects.css';

const Project = ({ title, date, images }) => {
    return (
        <div className="project-carousel-container">
            <Carousel>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img className="project-img" src={image} alt={`Project ${index + 1}`} />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="carousel-title">{title}</div>
            <div className="carousel-date">{date}</div>
        </div>
    );
};

export default Project;
