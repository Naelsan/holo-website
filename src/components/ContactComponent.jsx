import React, { Component } from 'react'

export default class ContactComponent extends Component {
  render() {
    return (
      <div className="footer" id="contactComponent" >
       <div className='container'>
         <div className='row'>
           <div className='col-4'>
            <p> Nous contacter</p>
           </div>
           <div className='col-4'>
           <p>Phrase bateau de contact ?</p>
           </div>
           <div className='col-4'>
           <p>mail peut-être ? </p>
           </div>
         </div>
         <div className='row'>
           <div className='col-4'>
           <p> autre text</p>
           </div>
           <div className='col-4'>
            <p> Mettre les réseaux ?</p>
           </div>
           <div className='col-4'>
            <p> Mettre les réseaux ?</p>
           </div>
         </div>
       </div>
      </div>
    )
  }
}
