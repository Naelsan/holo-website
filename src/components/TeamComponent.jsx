import React, { Component } from 'react'


export default class TeamComponent extends Component {

    constructor() {
        super()
        this.state = {
            currentDescr    : "",
            currentPoste    : "",
            currentPerson   : '',
            currentLinkedin : '',
        }
    }


    team = [
    {   'Name': 'Alexandre',
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png",
        "poste":  'développeur Réalité augmentée',
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,
        'linkedin': 'https://www.linkedin.com/in/alexandre-ward/'
    },
    { 
        'Name': 'Guillaume', 
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png", 
        'poste':'responsable marketing',
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,
        'linkedin':'https://www.linkedin.com/in/guillaume-blanchefort-6a59001b8/'
    },
    { 
        'Name': 'Mohammed', 
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png", 
        'poste':'chargé de communication',
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        'linkedin':'https://www.linkedin.com/in/mohamed-abdellahi-sidha/'
    },    
    { 
        'Name': 'Naël', 
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png", 
        'poste':'développeur web',
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        'linkedin':'https://www.linkedin.com/in/na%C3%ABl-02b193195/'
    },
    { 
        'Name': 'Remy', 
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png", 
        'poste':'chef de projet',
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        'linkedin':'https://www.linkedin.com/in/r%C3%A9my-got-6a79501a2/'
    },
    { 
        'Name': 'Yann', 
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png",
        'poste':'directeur financier',
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        'linkedin':'https://www.linkedin.com/in/yann-savin-7b9b14175/'
    }]

    updateDescriptionToDisplay(index) {
        console.log(this.team[index].descr)
        this.setState({ currentDescr: this.team[index].descr })
        this.setState({ currentPoste: this.team[index].poste })
        this.setState({ currentPerson: this.team[index].Name})
        this.setState({ currentLinkedin: this.team[index].linkedin})
    }

    render() {
        return (
            <>
                <section id="teamComponent" style={{"background-color": 'rgba(249, 246, 245 , 1.0)' }}>
                    <div id='centerDivTeam'>
                        <div className='leftTeamPart'>
                            <p className="space-between-content">Notre équipe</p>
                            <div className='container'>
                                <div className='row space-between-content'>
                                    {this.team.slice(0, 3).map((person, index) => (
                                        <div className='col-4 '>
                                            <img className='team-image' 
                                                src={require(`../images/team/${person.Name}.jpg`)} alt="Avatar"
                                                onClick={() => this.updateDescriptionToDisplay(index)} />
                                                <p className='bold'>{person.Name}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className='row space-between-content'>
                                    {this.team.slice(3, this.team.length).map((person, index) => (
                                        <div className='col-4'>
                                            <img className='team-image' 
                                                src={require(`../images/team/${person.Name}.jpg`)} alt="Avatar"
                                                onClick={() => this.updateDescriptionToDisplay(index + 3)} />
                                                <p className='bold'>{person.Name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='rightTextPart'>
                            {this.state.currentPoste && <p className='description-text'>{this.state.currentPerson} est notre {this.state.currentPoste}</p>}
                            <p className='description-text'>{this.state.currentDescr}</p>
                            {this.state.currentPoste &&  <img className='linkedin-logo' 
                                                src={require(`../images/linkedin.png`)} alt="Avatar"
                                                onClick={() => window.open(this.state.currentLinkedin, '_blank', 'noopener,noreferrer')} />}
                        </div>
                    </div>
                </section>
            </>

        )
    }
}
