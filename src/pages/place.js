import * as React from "react"
import Header from 'src/components/header'
import "src/asserts/styles/base.scss"

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