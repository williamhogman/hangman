import R from "ramda"
import findWord from "../api.js"

// Actions types
export const LETTER_GUESSED = Symbol("LETTER_GUESSED")
export const GAME_STARTED = Symbol("GAME_STARTED")

// Action creator utilities
const createFSA = R.curryN(2, (type, payload) => ({ type, payload }))
const createAction = (type, transform = R.identity) => R.pipe(transform, createFSA(type))

const startGameFinished = createAction(GAME_STARTED)
export const guessLetter = createAction(LETTER_GUESSED)

const DIFFICULTY_TABLE = {
  easy: [4, 6],
  medium: [5, 9],
  hard: [7, 10],
}

export const startGame = diff => dispatch => {
  findWord
    .apply(null, DIFFICULTY_TABLE[diff])
    .then(startGameFinished)
    .then(dispatch)
}
