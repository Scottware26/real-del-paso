import * as React from "react"
import Seo from "src/components/seo"
import Header from 'src/components/header'
import Slider from 'src/components/slider'
import Footer from 'src/components/footer'
import "src/asserts/styles/base.scss"

const IndexPage = () => {
  return (
    <>
        <Header/>
        <Slider/>
        <Footer/>
    </>
  )
}

export const Head = () => (
  <Seo title="Página principal" />
)

export default IndexPage