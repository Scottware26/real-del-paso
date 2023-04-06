import * as React from 'react'
import 'src/asserts/styles/header.scss'
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
                    siteUrl
                }
            }
        }
    `)

    return (
        <header>
            <div className="headers">
                <h1>
                    <Link to={data.site.siteMetadata.siteUrl} className="headerText">{data.site.siteMetadata.title}</Link>
                </h1>
                <h2 className="subHeaderText">{data.site.siteMetadata.description}</h2>
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
            <StaticImage className="small-logo"  src="../asserts/images/logo.jpg" alt="Real del Paso - Small logo"/>
        </header>
    )
}

export default Header