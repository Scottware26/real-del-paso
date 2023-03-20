import { Link } from 'gatsby'
import * as React from 'react'
import logo from "../images/logo.jpg"
import {
    container,
    headers,
    headerText,
    subHeaderText,
    nav,
    navList,
    navText, 
    logoCss
} from './header.module.css'

const Header = () => {
    return (
        <div className={container}>
            <div className={headers}>
                <h1>
                    <Link to='/' className={headerText}>Real del Paso</Link>
                </h1>
                <p className={subHeaderText}>El mejor equipo a tu servicio</p>
            </div>
            <nav className={nav}>
                <ul className={navList}>
                    <li>
                        <Link to="/aboutUs" className={navText}>Quiénes somos</Link>
                    </li>
                    <li> 
                        <Link to="/events" className={navText}>Eventos</Link>
                    </li>
                    <li className={navText}>Servicios</li>
                    <li className={navText}>Ubicación</li>
                    <li className={navText}>Cotizar evento</li>
                </ul>
            </nav>
            <img className={logoCss} src={logo} alt="Real del Paso"/>
        </div>
    )
}

export default Header