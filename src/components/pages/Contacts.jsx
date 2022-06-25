import React from 'react'
import Section from './styledContacts'

const Contacts = () => {
  return (
    <Section>
        <div className="container-info">

        <div className='container-titles'>
            <h2>My Contacts</h2>
            <h3>Contact Me</h3>
        </div>

        <ul>
            <li>
            <i className="fa-solid fa-square-phone"></i>
                (011) 941515-753
            </li>
            <li>
            <i className="fa-solid fa-envelope"></i>
                cajuishop@gmail.com
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jacksoncajui/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                    Linkedin
                </a>
            </li>
            <li>
                <a href="https://web.whatsapp.com/" target="_blank">
                    <i className="fa-brands fa-whatsapp-square"></i>
                    WhatsApp
                </a>
            </li>
            <li>
                <address>
                    <i className="fa-solid fa-location-dot"></i>
                    Mauá - SP / Brasil
                </address>
            </li>
        </ul>
      </div>
    </Section>
  )
}

export default Contacts
