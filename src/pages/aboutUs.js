import * as React from "react"
import Seo from "src/components/seo"
import Header from 'src/components/header'
import "src/asserts/styles/base.scss"

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
  <Seo title={page}/>
)

export default AboutUs