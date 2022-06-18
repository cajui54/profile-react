import React from 'react'
import Head from './styledHeader'
import logo from '../../assets/images/logo.png'
import NavMenu from '../Header/NavMenu';
import { Link } from 'react-router-dom';


const Header = () => {
  let menuOpen = false;
  const wordLogo = ['{', 'Dev-JKS', '}']

  const handleClick = () => {
    const menuBtn = document.querySelector('.menu_btn');
    const navMenu = document.querySelector('nav');

    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      navMenu.classList.add('openMenu');
    }
    else {
      menuBtn.classList.remove('open');
      menuOpen = false;
      navMenu.classList.remove('openMenu');
    }
  }

  const getAllLinkNav = () => {
  }
  getAllLinkNav();
  return (
    <Head>
      <Link to='/'>
      <div className='container-logo'>
          <span>{wordLogo[0]}</span>
          <span>{wordLogo[1]}</span>
          <span>{wordLogo[2]}</span>
      </div>
      </Link>
    

      <div className='menu_btn' onClick={handleClick}>
        <div className='menu_btn__burger'></div>
      </div>
      
      <NavMenu closeMenu = {handleClick} />
    </Head>
  )
}

export default Header
