import * as React from 'react'
import 'src/asserts/styles/footer.scss'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebook,  
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                id
                siteMetadata {
                    phone
                    call
                    facebook
                    instagram
                    whatsapp
                    author
                    author_web_site
                }
            }
        }
    `)

    return (
        <footer>
            <div className='contact-info-container'>
                <div className='phone'>
                    <h5>Teléfono:</h5>
                    <Link to={data.site.siteMetadata.call} className='contact-link'>{data.site.siteMetadata.phone}</Link>
                </div>
                <div className='social-networks'>
                    <h5>Redes sociales:</h5>
                    <a href={data.site.siteMetadata.facebook} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a href={data.site.siteMetadata.instagram} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href={data.site.siteMetadata.whatsapp} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </a>
                </div>
            </div>
            <div className='landing-page-sign-container'>
                <StaticImage className="large-logo"  src="../asserts/images/large-logo.png" alt="Real del Paso - large logo"/>
            </div>
            <div className='developer-sign-container'>
                <h6><Link to={data.site.siteMetadata.author_web_site}/>{data.site.siteMetadata.author}</h6>
            </div>
        </footer>
    )
}

export default Footer