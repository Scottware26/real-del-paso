import * as React from "react"
import { SEO } from "../components/seo"
import Header from '../components/header'
import "./index.css"

const page = "Quiénes somos"

const AboutUs = () => {
  return (
    <div>
        <Header/>
        <h2>{page}</h2>
    </div>
  )
}

export const Head = () => (
  <SEO/>
)

export default AboutUs