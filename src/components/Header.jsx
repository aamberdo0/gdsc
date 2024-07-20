import React from 'react'
import './Header.css';
export const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src='./gdscLogo.png' alt='sheridan-logo'
            width={350}></img>
        <div className="flexCenter h-menu">
            <a href="">Home</a>
            <a href="">Team</a>
            <a href="">Events</a>
            <a href="">Connect</a>
        </div>

        </div>
    </section>
  )
}
