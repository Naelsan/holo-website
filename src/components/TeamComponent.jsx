import React, { Component } from 'react'

export default class TeamComponent extends Component {

    constructor() {
        super()
        this.state = {
            currentDescr: ""
        }
    }


    team = [{'Name':'Alexandre',    'image':"https://cdn-icons-png.flaticon.com/512/147/147144.png", "descr":"Description pour Alexandre"},
            {'Name':'Guillaume',    'image':"https://cdn-icons-png.flaticon.com/512/147/147144.png", "descr":"Description pour Guillaume"},
            {'Name':'Mohammed',     'image':"https://cdn-icons-png.flaticon.com/512/147/147144.png", "descr":"Description pour Mohamed"},
            {'Name':'Naël',         'image':"https://cdn-icons-png.flaticon.com/512/147/147144.png", "descr":"Description pour Naël"},
            {'Name':'Remy',         'image':"https://cdn-icons-png.flaticon.com/512/147/147144.png", "descr":"Description Remy"},
            {'Name':'Yann',         'image':"https://cdn-icons-png.flaticon.com/512/147/147144.png", "descr":"Description Yann"}]

    updateDescriptionToDisplay(index){
        console.log(this.team[index].descr)
        this.setState({currentDescr : this.team[index].descr})
    }

    render() {
        return (
            <div id='centerDivTeam'>
                <div className='leftTeamPart'>
                    <p>Notre équipe</p>
                    <div className='container'>
                        <div className='row'>
                            {this.team.slice(0,3).map((person, index) => (
                                <div className='col-4'>
                                    <img className='team-image' src={person.image} alt="Avatar"
                                        onClick={() => this.updateDescriptionToDisplay(index)}/>
                                </div>
                            ))}                  
                        </div>
                        <div className='row'>
                        {this.team.slice(3,this.team.length).map((person, index) => (
                                <div className='col-4'>
                                    <img className='team-image' src={person.image} alt="Avatar"
                                        onClick={() => this.updateDescriptionToDisplay(index+3)}/>
                                </div>
                            ))}                       
                        </div>
                    </div>
                </div>
                <div className='rightTextPart'>
                    Rapide description
                    <p>{this.state.currentDescr}</p>
                </div>
            </div>
        )
    }
}
