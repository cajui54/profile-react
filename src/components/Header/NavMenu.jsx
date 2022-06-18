import React from 'react'
import Nav from './styledNav'
import {Link} from 'react-router-dom';


const NavMenu = ({closeMenu}) => {
  const handleCloseMenu = () => closeMenu();

  return (
    <Nav>
      <ul>
        <li>
          <Link to='/' onClick={handleCloseMenu}>Home</Link>
        </li>
        
        <li>
          <Link to='/about' onClick={handleCloseMenu}>About Me</Link>
        </li>

        <li>
          <Link to='/skill' onClick={handleCloseMenu}>Hard Skills</Link>
        </li>

        <li>
          <Link to='project' onClick={handleCloseMenu}>Projects</Link>
        </li>

        <li>
          <Link to='contact' onClick={handleCloseMenu}>Contact Me</Link>
        </li>
      </ul>
    </Nav>
  )
}

export default NavMenu
