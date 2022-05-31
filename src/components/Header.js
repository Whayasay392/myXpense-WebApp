import React from 'react'
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignal, faWifi, faBatteryFull} from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <header>
        <nav className='topNav'>
            <h4 className='pry-format' style={{fontWeight: '800'}}>MyXpense</h4> 
            <div className="top-icons-cover">
                    <FontAwesomeIcon className='icon' icon={faSignal} />     
                    <FontAwesomeIcon className='icon' icon={faWifi} />
                    <FontAwesomeIcon className='icon' icon={faBatteryFull} />
                </div>
        </nav>
       
    </header>
  )
}

export default Header