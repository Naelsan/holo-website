import React, { Component } from 'react'
import logo from '../images/head.png';

export default class HomeComponent extends Component {

  componentDidMount() {

    var image = document.querySelector("#cow")
    const onMouseMove = (e) => {
      let angle = Math.atan2(((window.screen.height / 2) - e.y), (e.x - (window.screen.width / 2)))
      image.setAttribute("style", 'transform : rotate(' + (-(angle * (180 / Math.PI))) + 'deg)')
    }
    document.addEventListener('mousemove', onMouseMove)
  }

  render() {
    return (
      <>
        <div className='rounded-div-main-text'>
          <img id="cow" src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='text-section-presentation'>
          <p className='equipe'>Equipe</p>
          <p className='project'>Projet</p>
          <p className='contact'>Nous contacter</p>
        </div>
      </>    
      )
  }
}
