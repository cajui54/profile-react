import React from 'react'
import HomeStyled from './styledHome'
import avatar from '../../assets/images/photo.jpeg'

const Home = () => {
  return (
    <HomeStyled>
        <div className='conteiner-photo'>
            <div className='conteiner-photo-inside'>
                <img src={avatar} alt="profile"/>
            </div>
        </div>

        <section>
          <div className='content-info'>
          <h2><span></span>Olá, eu sou</h2>
            <p>Jackson</p>
            <p>Silva</p>
            <p>Dev Font-End Jr</p>
          </div>
           
            
            <ul>
              <li>
                <a href="https://github.com/cajui54" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>

              <li>
                <a href="https://web.whatsapp.com/" target="_blank">
                  <i className="fa-brands fa-whatsapp-square"></i>
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/jacksoncajui/" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
            
        </section>
      
    </HomeStyled>
  )
}

export default Home
