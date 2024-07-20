import React from 'react'
import './Hero.css';
export const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            <div className="hero-left">
                <div className="hero-title">
                    <h1>
                        <span className='G'>G</span>
                        <span className='D'>D</span>
                        <span className='S'>S</span>
                        <span className='C'>C</span> 
                        <span className='sheridan'>
                            Sheridan 
                        </span>
                        <div className='description'>
                        <span className='G'> is </span>
                        <span className='D'> here </span>
                        <span className='S'> with </span>
                        <span className='C'> you </span>
                            </div>
                    </h1>
                </div>
            </div>
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src='./googleCropped.png' alt='hero-image'></img>
                </div>
            </div>
        </div>
    </section>
  )
}
