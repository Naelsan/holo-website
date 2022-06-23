import React, { Component } from 'react'
import imageTest from '../images/ho.png'

export default class ProjectComponent extends Component {

  constructor() {
    super()
    this.state = {
      numImage: 0,
    }
  }

  nbClick = 0
  updateImageProjectToDisplay() {
    this.nbClick++
    if (this.nbClick > 3) {
      this.setState({ numImage: 0 })
      this.nbClick = 0
    }
    else this.setState({ numImage: this.state.numImage + 1 })
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
              <p className='title-project-parts'>Un premier pas dans le domaine de la médecine</p>
              <p className='textProject'>Cette solution nous permet de mettre un pied dans le domaine de la médecine sans prendre en compte tous le aspects vitaux. En effet, notre solution se veut principalement éducative</p>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6 relative-container'>
              <p className='title-project-parts'>
                Le corps humain à portée de main
              </p>
              <p className='textProject'>
              Cette solution, éducative dans un premier temps permettra de comprendre plus en détail le fonctionnement du corps humain.
                Le but final de notre solution sera de mettre en avant tous les détails de nos corps ainsi que son fonctionnement dans les moindres détails.
                Cette solution permet un apprentissage plus ludique et simple</p>
            </div>
            <div className='col-6'>
              <img className='imageProject'
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
              <p className='title-project-parts'>Des évoutions ambitieuses</p>
              <p className='textProject'>Nous souhaitons, dans un futur proche, ajouter certaines fonctionnemen comme par exemple la manipuation plus poussé des organes. 
              Nous souhaitons également pouvoir afficher certaines informations importantes concernant les organes, des animations et la découpe pour mettre en avant les moindres recoins.
              L'implémentation des réactions du système nerveux est une fonctionnalité qui nous tien à coeur et sur laquelle nous travaillons serieusement</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
