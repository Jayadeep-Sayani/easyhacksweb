import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <a href="/"><img src="" alt="EasyHacks" /></a>
        </div>

        <div className='reg-links'>
        <a href="/">Home</a>
        <a href="/details">Details</a>
        <a href="/news">Schedule</a>
        <a href="/contact">Prizes</a>
        </div>

        <div className="apply-link">
            <a href="">Apply!</a>
        </div>
    </div>
  )
}
