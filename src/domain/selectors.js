export const getUsedLetters = ({incorrectLetters, correctLetters}) =>
  incorrectLetters.union(correctLetters).toArray()

export const getMaskedWord = ({correctLetters, correctWord}) =>
  (correctWord ? correctWord.split("") : []).map(x => correctLetters.has(x) ? x : null)

const NO_LIVES = 9
export const getTimesIncorrect = ({ incorrectLetters }) => Math.min(incorrectLetters.size, NO_LIVES)

export const GAME_STATUS = {
  INACTIVE: Symbol("INACTIVE"),
  WON: Symbol("WON"),
  LOST: Symbol("LOST"),
  ACTIVE: Symbol("ACTIVE")
}

export const getGameStatus = ({ correctWord, incorrectLetters, correctLetters }) => {
  if (correctWord == null) {
    return GAME_STATUS.INACTIVE
  } else if (incorrectLetters.size > NO_LIVES) {
    return GAME_STATUS.LOST
  } else if (correctLetters.size >= new Set(correctWord).size) {
    return GAME_STATUS.WON
  } else {
    return GAME_STATUS.ACTIVE
  }
}
