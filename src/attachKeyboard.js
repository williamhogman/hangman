import R from "ramda"
import { guessLetter } from "./domain/actions"

const keyEventToString = e => e.ctrlKey ? null : String.fromCharCode(e.keyCode).toLowerCase()
const dispatchTruthy = dispatch => x => x ? dispatch(x) : null

const handler = dispatch =>
      R.pipe(keyEventToString,
             guessLetter,
             dispatchTruthy(dispatch))

export default ({ dispatch }) => window.addEventListener("keyup", handler(dispatch))
