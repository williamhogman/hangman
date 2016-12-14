import R from "ramda"

const BASE_URL = "https://wordsapiv1.p.mashape.com/words?"
const DEFAULT_OPTIONS = { headers: { "X-Mashape-Key": WORD_API_KEY }}

const toQueryString = params =>
      Object.keys(params)
      .sort()
      .filter(name => params[name] != null)
      .map(name => `${name}=${encodeURIComponent(params[name])}`)
      .join("&")

const toAPIURL = o => BASE_URL + toQueryString(o)
const apiCall = params =>
      fetch(toAPIURL(params), DEFAULT_OPTIONS).then(res => res.json())

const findRandomWord = (min, max) => apiCall({ random: "true", lettersMin: min, lettersMax: max })

export default R.pipe(findRandomWord, p => p.then(w => w.word))
