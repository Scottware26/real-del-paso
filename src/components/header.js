import { Link } from 'gatsby'
import * as React from 'react'
import './header.scss'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
    return (
        <div className="container">
            <div className="headers">
                <h1>
                    <Link to='/' className="headerText">Real del Paso</Link>
                </h1>
                <p className="subHeaderText">El mejor equipo a tu servicio</p>
            </div>
            <nav className="nav">
                <ul className="navList">
                    <li>
                        <Link to="/aboutUs" className="navText">Quiénes somos</Link>
                    </li>
                    <li> 
                        <Link to="/salon" className="navText">Salón</Link>
                    </li>
                    <li className="navText">Servicios</li>
                    <li className="navText">Ubicación</li>
                    <li className="navText">Cotizar evento</li>
                </ul>
            </nav>
            <StaticImage className="small-logo"  src="../images/logo.jpg" alt="Real del Paso - Small logo"/>
        </div>
    )
}

export default Header