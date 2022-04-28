import React from 'react';
import './Navbar.css'

export default function Navbar() {

    const navbar = document.getElementById('navbar')
let scrolled = false;

window.onscroll = function(){
  if(window.pageYOffset > 100){
    navbar.classList.remove('top');
    if(!scrolled){
      navbar.style.transform = 'translateY(-70px)'
    }
    setTimeout(function(){
      navbar.style.transform = "translateY(0)";
      scrolled = true
    },200)
  }else {
    navbar.classList.add('top')
    scrolled = false
  }
}


  return (
    <div>
        <header className="hero" id='home'>
    <div className="navbar top border-3" id="navbar">
      <h1 className="logo text-[35px] text-left">
        <span className="text text-[35px] text-[#28a745]"><i className="fas fa-user-md"></i></span> Dr. Pietro Lerro
        <hr /> <small className="specialized">Specialista in Pediatria, Pediatra Gastroenterologo </small>
      </h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Info</a></li>
          <li><a href="#contact">Contatti</a></li>
        </ul>
      </nav>
    </div>
  </header>
  </div>
  )
}
