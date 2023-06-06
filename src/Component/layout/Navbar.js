import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export class Navbar extends Component {
  render() {
    return (
<nav className='navbar bg-primary'>
    <h1>
        <FontAwesomeIcon icon={icon({name: 'coffee', family: 'sharp', style: 'solid'})} /> // Setting both family and style
        <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> // A brand icon 
        <i className='fab fa-github'> </i>
    </h1>
</nav>

    )
  }
}

export default Navbar