import React from "react"
import ART from "./art"
import { connect } from "react-redux"
import { getTimesIncorrect } from "../domain/selectors"

function Gallows({ incorrect }) {
  return (
      <div style={{minHeight: "8em", display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
        <pre>{ART[incorrect]}</pre>
      </div>
  )
}

export default connect(s => ({ incorrect: getTimesIncorrect(s)}))(Gallows)
