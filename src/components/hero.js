import React from 'react'
import './Hero.css'

const Hero = ({imageSrc}) => {
    return (
    <div className="hero">
        <img src={imageSrc} alt="hero" className="hero__image"/>
        <h1 className="hero__title">Dekho Khareedo Kamao</h1>
    </div>
    );
}

export default Hero;