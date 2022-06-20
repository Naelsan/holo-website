import React, { Component } from 'react'
import  usflag  from '../images/usflag.png'
import  frflag  from '../images/frenchflag.png'

export default class LanguageComponent extends Component {
    render() {
        return (
            <>
            <div id='centerDivLanguage'>
                <div className='left'>
                    <img className='imageLanguage' src={frflag} alt="logo" />
                </div>
                <div className='right'>
                    <img className='imageLanguage' src={usflag} alt="logo" />
                </div>
            </div>
            </>
        )
    }
}
