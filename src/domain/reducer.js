import { LETTER_GUESSED, GAME_STARTED } from "./actions"
import { Set, Record } from "immutable"

import R from "ramda"

// Utility for building FSA-based reducers
function dispatcherByType(defaultState, actions) {
  return (state, action) =>
    (actions[action.type] || R.identity)(
      state === undefined ? defaultState : state,
      action.payload
    )
}

const GameState = new Record({
  incorrectLetters: new Set(),
  correctWord: null,
  correctLetters: new Set(),
  alphabet: new Set(),
})

const actions = {
  [LETTER_GUESSED]: (state, letter) => {
    if (state.correctWord == null) {
      return state
    }
    const keyToUpdate = state.alphabet.has(letter) ? "correctLetters" : "incorrectLetters"
    return state.update(keyToUpdate, x => x.add(letter))
  },
  [GAME_STARTED]: (_state, correctWord) => new GameState({correctWord, alphabet: new Set(correctWord)}),
}

export default dispatcherByType(new GameState(), actions)
