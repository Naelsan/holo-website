import React, { Component } from 'react'
import logo from '../images/head.png';
import { HashLink as Link } from 'react-router-hash-link';

export default class HomeComponent extends Component {
    render() {
        return (
            <>
                <div className='rounded-div-main-text'>
                    <img id="cow" src={logo} className="App-logo" alt="logo" />
                </div>
                <div className='text-section-presentation'>
                    <Link className='equipe link' to='#teamComponent'>
                        Equipe
                    </Link>
                    <Link className='project link' to="#projectComponent">Projet</Link>
                    <Link className='contact link' to="#contactComponent">Nous contacter</Link>
                </div>
            </>
        )
    }
}
