import React, { Component } from 'react'
import phone from '../images/footer/phone.png'
import mail from '../images/mail.png'
import location from '../images/footer/location.png'

export default class ContactComponent extends Component {
  render() {
    return (
      <div className="footer" id="contactComponent" >
        <div className='container'>
          <div className='row'>
            <div className='col-12 '>
              <p className='underline'> Où nous trouver ?</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
            <img className='logos-contact-perso' 
                src= {phone} alt="Avatar" />
              <p> 09 72 10 62 38</p>
            </div>
            <div className='col-4'>
            <img className='logos-contact-perso' 
                src= {mail} alt="Avatar" />
              <p> holomedic.contact@gmail.com</p>
            </div>
            <div className='col-4'>
            <img className='logos-contact-perso' 
                src= {location} alt="Avatar" />
              <p> 22 All. Alan Turing, 63000 Clermont-Ferrand</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
