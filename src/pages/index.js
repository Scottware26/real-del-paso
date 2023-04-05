import * as React from "react"
import Seo from "../components/seo"
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
  <Seo title="Página principal" />
)

export default IndexPage