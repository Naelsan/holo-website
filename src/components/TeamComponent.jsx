import React, { Component } from 'react'

export default class TeamComponent extends Component {

    constructor() {
        super()
        this.state = {
            currentDescr: ""
        }
    }


    team = [
    {   'Name': 'Alexandre',
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png", 
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    },
    { 
        'Name': 'Guillaume', 
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png", 
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    },
    { 
        'Name': 'Mohammed', 
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png", 
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    },    
    { 
        'Name': 'Naël', 
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png", 
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    },
    { 
        'Name': 'Remy', 
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png", 
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    },
    { 
        'Name': 'Yann', 
        'image': "https://cdn-icons-png.flaticon.com/512/147/147144.png",
        'descr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    }]

    updateDescriptionToDisplay(index) {
        console.log(this.team[index].descr)
        this.setState({ currentDescr: this.team[index].descr })
    }

    render() {
        return (
            <>
                <section id="teamComponent" style={{"background-color": 'aliceblue' }}>
                    <div id='centerDivTeam'>
                        <div className='leftTeamPart'>
                            <p className="space-between-content">Notre équipe</p>
                            <div className='container'>
                                <div className='row space-between-content'>
                                    {this.team.slice(0, 3).map((person, index) => (
                                        <div className='col-4 '>
                                            <img className='team-image' src={person.image} alt="Avatar"
                                                onClick={() => this.updateDescriptionToDisplay(index)} />
                                        </div>
                                    ))}
                                </div>
                                <div className='row space-between-content'>
                                    {this.team.slice(3, this.team.length).map((person, index) => (
                                        <div className='col-4'>
                                            <img className='team-image' src={person.image} alt="Avatar"
                                                onClick={() => this.updateDescriptionToDisplay(index + 3)} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='rightTextPart'>
                            <p className='description-text'>{this.state.currentDescr}</p>
                        </div>
                    </div>
                </section>
            </>

        )
    }
}
