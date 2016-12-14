import { createStore, combineReducers, applyMiddleware } from "redux"
import createLogger from "redux-logger"
import thunk from "redux-thunk"
import gameState from "./reducer"

const logger = createLogger({
  actionTransformer: (action) => ({
    ...action,
    type: String(action.type),
  })
})

export default () => createStore(
  gameState,
  applyMiddleware(thunk, logger),
)
