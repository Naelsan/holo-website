import './App.css';
import ContactComponent from './components/ContactComponent';
import HomeComponent from './components/HomeComponent';
import LanguageComponent from './components/LanguageComponent';
import ProjectComponent from './components/ProjectComponent';
import TeamComponent from './components/TeamComponent';


function App() {

  return (

    <div className="App">
      <p>holomedic</p>
      <header className="App-header">
        <LanguageComponent/>
        <HomeComponent/>
      </header>
      <ProjectComponent/>
      <TeamComponent/>
    </div>
  );
}

export default App;
