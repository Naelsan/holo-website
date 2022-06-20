import './App.css';
import ContactComponent from './components/ContactComponent';
import LanguageComponent from './components/LanguageComponent';
import ProjectComponent from './components/ProjectComponent';
import TeamComponent from './components/TeamComponent';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import HomeComponent from './components/HomeComponent';


export default class App extends Component {

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
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <LanguageComponent />
              <HomeComponent/>
            </header>
            <ProjectComponent/>
            <TeamComponent/>
            <ContactComponent/>
          </div>
        </BrowserRouter>
      </>
    );
  }
}



