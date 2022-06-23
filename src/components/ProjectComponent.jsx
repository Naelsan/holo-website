import React, { Component } from 'react'
import imageTest from '../images/ho.png'

export default class ProjectComponent extends Component {

  constructor(){
    super()
    this.state = {
      numImage: 0,
    }
  }

  nbClick = 0
  updateImageProjectToDisplay(){
    this.nbClick++
    if(this.nbClick >3 ) {
      this.setState({ numImage: 0})
      this.nbClick = 0
    }
    else this.setState({ numImage: this.state.numImage +1})
  }

  render() {
    return (
      <div id="projectComponent">
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img className='imageProject' src={imageTest} alt="First one" />
            </div>
            <div className='col-6 relative-container'>
              <p className=''>Un premier pas dans le domaine de la médecine</p>
              <p className='textProject'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6 relative-container'>
              <p>
                Le corps humain à portée de main
              </p>
              <p className='textProject'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='col-6'>
            <img  className='imageProject' 
                    src={require(`../images/projet/${this.state.numImage}.png`)} alt="Avatar"
                    onClick={() => this.updateImageProjectToDisplay()} />            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img className='imageProject' src={imageTest} alt="Third one  " />
            </div>
            <div className='col-6 relative-container'>
              <p>JSP</p>
              <p className='textProject'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
