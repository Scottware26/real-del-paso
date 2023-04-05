import * as React from "react"
import Header from '../components/header'
import "./index.css"

const page = "Salón"

const Place = () => {
  return (
    <div>
        <Header/>
        <h2>{page}</h2>
    </div>
  )
}

export const Head = () => <title>Real del Paso - {page}</title>

export default Place