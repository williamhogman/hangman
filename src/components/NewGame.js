import React from "react"
import { connect } from "react-redux"
import { startGame } from "../domain/actions.js"

class NewGame extends React.PureComponent {
  constructor() {
    super()
    this.startEasy = this.onStart.bind(this, "easy")
    this.startMedium = this.onStart.bind(this, "medium")
    this.startHard = this.onStart.bind(this, "hard")
  }
  onStart(difficulty, e) {
    e.preventDefault()
    this.props.startGame(difficulty)
  }
  render() {
    return (
        <div>
          Play!
          <a href="#" onClick={this.startEasy}>Easy</a>
          <a href="#" onClick={this.startMedium}>Medium</a>
          <a href="#" onClick={this.startHard}>Hard</a>
        </div>
    )
  }

}


export default connect(null, { startGame })(NewGame)
