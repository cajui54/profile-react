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
          Estou cursando Ciência da Computação e estudando desenvolvimento web com foco no front-end,
          e um dos meus princípais objetivos é dominar as princípais tecnologias do ecossistema React.JS
          como Redux, APIs, Routes, Styled-Components, TypeScript, Node.JS, Teste e demais tecnologias!
          </p>
        </article>
      </section>
      <TimeLine/>    
    </About>
  )
}

export default AboutMe
