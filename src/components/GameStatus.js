import React from "react"
import { connect } from "react-redux"
import { getGameStatus, GAME_STATUS } from "../domain/selectors.js"

const MESSAGES = {
  [GAME_STATUS.WON]: "You won!",
  [GAME_STATUS.LOST]: "You lost!",
  [GAME_STATUS.INACTIVE]: "Pick a difficulty to start",
}

const STYLE = {fontSize: "1.5em", minHeight: "2em"}

const GameStatus = ({ status }) => (
    <div style={STYLE}>{MESSAGES[status]}</div>
)

export default connect(s => ({ status: getGameStatus(s) }))(GameStatus)
