import React from 'react'
import Section from './styledTimeLine'

const TimeLine = () => {
  return (
    <Section className='container'>
      <h2 className='subtitle'>
        <i className="fa-solid fa-code-commit"></i>
        Roadmap
      </h2>

      <div className="timeline">
        
        <ul>
          <li>
              <div className="timeline-content">
                <details>
                  <summary>
                    <h2>
                      <i className="fa-brands fa-html5"></i>
                      HTML5
                    </h2>
                  </summary>
                  <div>
                    <p><i className="fa-solid fa-code"></i> Estrutura Básica</p>
                    <p><i className="fa-solid fa-code"></i> Cebeçalhos</p>
                    <p><i className="fa-solid fa-code"></i>  Parágrafo</p>
                    <p><i className="fa-solid fa-code"></i>  Link</p>
                    <p><i className="fa-solid fa-code"></i>  imagem</p>
                    <p><i className="fa-solid fa-code"></i> Tags</p>
                    <p><i className="fa-solid fa-code"></i>  Semântica</p>
                    <p><i className="fa-solid fa-code"></i>  Tabelas</p>
                    <p><i className="fa-solid fa-code"></i>  Lista</p>
                    <p><i className="fa-solid fa-code"></i>  Botão</p>
                    <p><i className="fa-solid fa-code"></i>  Inputs</p>
                    <p><i className="fa-solid fa-code"></i>  Atributos</p>
                    <p><i className="fa-solid fa-code"></i>  Elementos</p>
                    <p><i className="fa-solid fa-code"></i>  Meta Tags</p>
                    <p><i className="fa-solid fa-code"></i>  Acessibilidade</p>
                    <p><i className="fa-solid fa-code"></i>  SEO</p>
                  </div>
                </details>
              </div>
          </li>

          <li>
              <div className="timeline-content">
              <details>
                  <summary>
                    <h2>
                    <i className="fa-brands fa-css3-alt"></i>
                      CSS3
                    </h2>
                  </summary>
                  <div>
                    <p><i className="fa-brands fa-css3"></i> Estrutura Básica</p>
                    <p><i className="fa-brands fa-css3"></i> Seletores</p>
                    <p><i className="fa-brands fa-css3"></i>  Posicionamentos</p>
                    <p><i className="fa-brands fa-css3"></i>  Box Model</p>
                    <p><i className="fa-brands fa-css3"></i>  Display</p>
                    <p><i className="fa-brands fa-css3"></i> Especificação</p>
                    <p><i className="fa-brands fa-css3"></i>  Flex Box</p>
                    <p><i className="fa-brands fa-css3"></i>  Grid</p>
                    <p><i className="fa-brands fa-css3"></i>  Media Queries</p>
                    <p><i className="fa-brands fa-css3"></i>  Pseduo Elementos</p>
                    <p><i className="fa-brands fa-css3"></i>  Pseduo Classes</p>
                    <p><i className="fa-brands fa-css3"></i>  Atributos</p>
                    <p><i className="fa-brands fa-css3"></i>  Animations</p>
                    <p><i className="fa-brands fa-css3"></i>  Margin</p>
                    <p><i className="fa-brands fa-css3"></i>  Padding</p>
                  </div>
                </details>
                
              </div>
          </li>

          <li>
              <div className="timeline-content">
              <details>
                  <summary>
                    <h2>
                    <i className="fa-brands fa-js"></i>
                      JavaScript
                    </h2>
                  </summary>
                  <div>
                    <p><i className="fa-brands fa-js-square"></i>  Sintaxe</p>
                    <p><i className="fa-brands fa-js-square"></i>  Manipulação do DOM</p>
                    <p><i className="fa-brands fa-js-square"></i>  Posicionamentos</p>
                    <p><i className="fa-brands fa-js-square"></i>  Fetch API</p>
                    <p><i className="fa-brands fa-js-square"></i>  Async Await</p>
                    <p><i className="fa-brands fa-js-square"></i>  Event Listners</p>
                    <p><i className="fa-brands fa-js-square"></i>  Array</p>
                    <p><i className="fa-brands fa-js-square"></i>  Object</p>
                    <p><i className="fa-brands fa-js-square"></i>  ES6 + JS</p>
                    <p><i className="fa-brands fa-js-square"></i>  Promises</p>
                    <p><i className="fa-brands fa-js-square"></i>  Classes</p>
                    <p><i className="fa-brands fa-js-square"></i>  Array Methods</p>
                    <p><i className="fa-brands fa-js-square"></i>  Escolpo</p>
                    <p><i className="fa-brands fa-js-square"></i>  Hosting</p>
                    <p><i className="fa-solid fa-vial-virus"></i>  JEST - Testes unitário (Básico)</p>
                  </div>
                </details>
                
              </div>
          </li>

          <li>
              <div className="timeline-content">
              <details>
                  <summary>
                    <h2>
                    <i className="fa-brands fa-git-alt"></i>
                      Git
                    </h2>
                  </summary>
                  <div>
                    <p><i className="fa-solid fa-code-pull-request"></i> Brands</p>
                    <p><i className="fa-solid fa-code-pull-request"></i> Git Init</p>
                    <p><i className="fa-solid fa-code-pull-request"></i> Marge</p>
                    <p><i className="fa-solid fa-code-pull-request"></i> Git Push</p>
                    <p><i className="fa-solid fa-code-pull-request"></i> Git Commit</p>
                    <p><i className="fa-solid fa-code-pull-request"></i> Git Status</p>
                    
                  </div>
                </details>
              </div>
          </li>
          
          <li>
              <div className="timeline-content">
              <details>
                  <summary>
                    <h2>
                    <i className="fa-brands fa-github-square"></i>
                      GitHub
                    </h2>
                  </summary>
                  <div>
                    <p>Repositório para gerenciamento de projeto, códigos etc..</p>
                  </div>
                </details>
              </div>
          </li>
          
          <li>
              <div className="timeline-content">
              <details>
                  <summary>
                    <h2>
                    <i className="fa-brands fa-react"></i>
                      React.JS
                    </h2>
                  </summary>
                  <div>
                    <p><i className="fa-brands fa-react"></i> Estrutura JSX</p>
                    <p><i className="fa-brands fa-react"></i> Componentes</p>
                    <p><i className="fa-brands fa-react"></i> Props</p>
                    <p><i className="fa-brands fa-react"></i> CSS Module</p>
                    <p><i className="fa-brands fa-react"></i> Fragments</p>
                    <p><i className="fa-brands fa-react"></i> Events onClick, onChange etc..</p>
                    <p><i className="fa-brands fa-react"></i> Alguns Hooks (useState, useEffects)</p>
                    <p><i className="fa-brands fa-react"></i> Redenrização condicional if</p>
                    <p><i className="fa-brands fa-react"></i> Redenrização Listas</p>
                    <p><i className="fa-brands fa-react"></i> State Lift</p>
                    <p><i className="fa-brands fa-react"></i> React Icon</p>
                    <p><i className="fa-brands fa-react"></i> Styled Components</p>
                    <p><i className="fa-brands fa-react"></i> React Routes</p>
                    <p><i className="fa-solid fa-computer"></i> Sigo estudando...</p>
                  </div>
                </details>
              </div>
          </li>
       
        </ul>
      </div>
    </Section>
  )
}

export default TimeLine
