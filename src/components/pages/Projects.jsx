import React from 'react'
import Section from './styledProjects';

const Projects = () => {
    const dataSkills = [
        {
            icon: 'fa-solid fa-money-bill-transfer',
            title: 'Conversor de Moedas',
            linkSite: 'https://cajui54.github.io/conversor-moeda-dolar-real/',
            linkGithub: 'https://github.com/cajui54/conversor-moeda-dolar-real',
        },

        {
            icon: 'fa-solid fa-clipboard-list',
            title: 'ToDoList',
            linkSite: 'https://cajui54.github.io/Project-ToDoList/',
            linkGithub: 'https://github.com/cajui54/Project-ToDoList',
        },

        {
            icon: 'fa-solid fa-dolly',
            title: 'Dashboard Stock',
            linkSite: 'https://cajui54.github.io/dashboard-adega-manager/',
            linkGithub: 'https://github.com/cajui54/dashboard-adega-manager',
        },

        {
            icon: 'fa-solid fa-building',
            title: 'Simulador de FIIs',
            linkSite: 'https://simulador-dividendo-fundo-imobiliario-zeta.vercel.app/',
            linkGithub: 'https://github.com/cajui54/SimuladorDividendoFundoImobiliario',
        },

        {
            icon: 'fa-solid fa-users-viewfinder',
            title: 'Dashbord User',
            linkSite: 'https://sistema-gerenciador-usuarios.vercel.app/#',
            linkGithub: 'https://github.com/cajui54/Sistema-Gerenciador-Usuarios',
        },

        {
            icon: 'fa-solid fa-money-bill-trend-up',
            title: 'Stock & Reits',
            linkSite: 'https://stoke-reits-simulador-three.vercel.app/',
            linkGithub: 'https://github.com/cajui54/Stoke-REITS-Simulador',
        },

        {
            icon: 'fa-solid fa-clone',
            title: 'Clone de um Site',
            linkSite: 'https://clone-infusion.vercel.app/',
            linkGithub: 'https://github.com/cajui54/Infusion',
        },
    ]
    
    const loadSkills = (skill, index) => {
        return (
            <div key={index} className="card-project">
            <div className='container-logo'>
                <a href={skill.linkSite} target='_blank'>
                    <i className={skill.icon}></i>
                </a>
            </div>
            

            <div className='container-info-card'>
                <h2>{skill.title}</h2>
                <p>Mais informações abaixo:</p>
               
                <ul>
                    <li>
                        <a href={skill.linkSite} target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-globe"></i>
                        </a>
                    </li>

                    <li>
                        <a href={skill.linkGithub} target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-github"></i>
                        </a>        
                    </li>
                </ul>
                
            </div>
        </div>

        )
    }
  return (
    <Section>
      <div className='container-subtitles'>
        <h2>My Projects</h2>
        <h3>Projects made recent</h3>
      </div>

      <div className='container-projects'>
            {dataSkills.map(loadSkills)}
      </div>
    </Section>
  )
}

export default Projects
