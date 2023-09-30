import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import { DevWarenLogo, LogoReact, LogoTypescript } from '../Image/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link className="logo" to={'/'}>
        <img src={DevWarenLogo} alt="logo" />
        <p className="sub-logo">Waren</p>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to={'/'}>
          <FontAwesomeIcon icon={faHome} className="icon" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to={'/about'}
        >
          <FontAwesomeIcon icon={faUser} className="icon" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to={'/contact'}
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </NavLink>
      </nav>
        <Link className="logo-2" to={'/'}>
          <img src={LogoTypescript} alt="logo" />
        </Link>
    </aside>
  )
}
