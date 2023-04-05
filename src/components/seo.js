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
        <title>{title} | {data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="image" content={data.site.siteMetadata.image} />
    </>
  )
}

export default Seo