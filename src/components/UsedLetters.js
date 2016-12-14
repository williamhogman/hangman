import React from "react"
import { connect } from "react-redux"
import { getUsedLetters } from "../domain/selectors.js"

function UsedLetters({letters}) {
  const els = letters.map(x => <span key={x}>{x}</span>)
  return (
      <div>
        Used letters
        <div>{els}</div>
      </div>
  )
}

export default connect(s => ({ letters: getUsedLetters(s) }))(UsedLetters)
