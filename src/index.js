import "babel-polyfill"
import createStore from "./domain/store"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Root from "./components/Root.js"
import attachKeyboard from "./attachKeyboard.js"

const render = e => ReactDOM.render(e, document.getElementById("main"))

const injectedRoot = (store) => (
    <Provider store={store}>
      <Root />
    </Provider>
)

function main() {
  const store = createStore()
  render(injectedRoot(store))
  attachKeyboard(store)
}

main()
