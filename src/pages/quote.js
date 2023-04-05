import * as React from "react"
import Seo from "../components/seo"
import Header from '../components/header'
import "./index.css"

const page = "Cotizar evento"

const Quote = () => {
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

export default Quote