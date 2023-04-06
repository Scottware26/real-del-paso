import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
        site {
            id
            siteMetadata {
                title
                description
                image
                siteUrl
            }
        }
    }
  `)

  return (
    <>
        <meta charSet="UTF-8" />
        <html lang="en" />
        <title>{title} | {data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
    </>
  )
}

export default Seo