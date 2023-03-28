import * as React from "react"
import { SEO } from "../components/seo"
import Header from '../components/header'
import "./index.css"

const IndexPage = () => {
  return (
    <div>
        <Header/>
    </div>
  )
}

export const Head = () => (
  <SEO />
)

export default IndexPage