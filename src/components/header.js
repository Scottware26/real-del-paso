import * as React from 'react'
import './header.scss'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                id
                siteMetadata {
                    title
                    description
                    image
                    
                }
            }
        }
    `)

    return (
        <div className="container">
            <div className="headers">
                <h1>
                    <Link to='/' className="headerText">{data.site.siteMetadata.title}</Link>
                </h1>
                <p className="subHeaderText">{data.site.siteMetadata.description}</p>
            </div>
            <nav className="nav">
                <ul className="navList">
                    <li>
                        <Link to="/aboutUs" className="navText">Quiénes somos</Link>
                    </li>
                    <li> 
                        <Link to="/place" className="navText">Salón</Link>
                    </li>
                    <li>
                        <Link to="/services" className="navText">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/location" className="navText">Ubicación</Link>
                    </li>
                    <li>
                        <Link to="/quote" className="navText">Cotizar evento</Link>
                    </li>
                </ul>
            </nav>
            <StaticImage className="small-logo"  src="../images/logo.jpg" alt="Real del Paso - Small logo"/>
        </div>
    )
}

export default Header