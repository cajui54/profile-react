import React from 'react'
import About from './styledAboutMe'
import tecnologiPhoto from '../../assets/images/code.jpg';
import TimeLine from '../AboutMe/TimeLine'

const AboutMe = () => {
  const subtitle = ['<', 'Sobre Mim', '/>']
  return (
    <About>
      <section className='container-article'>
      

        <article>
          <h2>
            <span>{subtitle[0]}</span>
            <span>{subtitle[1]}</span>
            <span>{subtitle[2]}</span>
          </h2>

          <p>
            Sou formado em análise e desenvolvimento de sistemas 
            e atualmente estudante desenvolvimento web Front-End,
            e um dos meus principais foco é dominar as tecnologias
            React.JS | APIs | Routes | Hooks, React Native, TypeScript,
            Jest, Scrum e demais tecnologias relacionadas front-end e back-end
          </p>
        </article>
      </section>
      <TimeLine/>    
    </About>
  )
}

export default AboutMe
