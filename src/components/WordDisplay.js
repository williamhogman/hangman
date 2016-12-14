import React from "react"
import { connect } from "react-redux"
import { getMaskedWord } from "../domain/selectors.js"


const LETTER_HOLDER_STYLE = {
  width: "1em",
  minHeight: "2em",
  display: "inline-block",
  borderBottom: "1px solid #000",
  margin: "0 0.5em",
  textAlign: "center",
  padding: "0 0.25em"
}

const LetterHolder = ({ letter }) => (
    <div style={LETTER_HOLDER_STYLE}>
    {letter || "" }
    </div>
)

function WordDisplay({ masked }) {
  const els = masked.map(x => (<LetterHolder letter={x} />))
  return <div><div style={{ minHeight: "3em"}}>{els}</div></div>
}

export default connect(s => ({
  masked: getMaskedWord(s),
}))(WordDisplay)
