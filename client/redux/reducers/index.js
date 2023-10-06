import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import game from './game'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    game
  })

export default createRootReducer
