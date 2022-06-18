import React from 'react'
import Section from './styledHardSkills'

const HardSkills = () => {
    const skills = [
        {title: 'HTML5', icon: 'fa-brands fa-html5'},
        {title: 'CSS3', icon: 'fa-brands fa-css3-alt'},
        {title: 'JavaScript', icon: 'fa-brands fa-js'},
        {title: 'Git', icon: 'fa-brands fa-git-alt'},
        {title: 'GitHub', icon: 'fa-brands fa-github'},
        {title: 'React.Js', icon: 'fa-brands fa-react'},
        {title: 'Jest.JS', icon: 'fa-solid fa-vial-virus'},
        {title: 'BootStrap', icon: 'fa-brands fa-bootstrap'},
        {title: 'Ubuntu', icon: 'fa-brands fa-ubuntu'},
    ]
    
    const loadSkills = (skill, index) => {
        return (
            <div key={index} className="card">
                <i className={skill.icon}></i>
                <h3>{skill.title}</h3>
            </div>
        )
        
    }

  return (
    <Section>
        <article>
            <div className='container-subtitle'>
                <h2 className='subtitle'>My Skills</h2>
                <h3 className='subtitleH3'>My Experties</h3>
            </div>
            <p>
                Abaixo destaco minhas habilidades que adquirir em cursos, projetos pessoais e trabalhos freelancer aplicandos minhas hard skills e soft skills,
                sigo estudando e aprimorando minhas habilidades
            </p>
        </article>
        
        <div className='container-skills'>
            <h2 className='subtitle-hard-skills'>
                <i className="fa-solid fa-code-commit"></i>
                Hard Skills
            </h2>
            <div className='skills'>
                {skills.map(loadSkills)}
            </div>
            
        </div>
     
      
      
    </Section>
  )
}

export default HardSkills
