import actions from '../Actions/action'

const initialState = {
  row: 0,
  col: 0,
  arr: [],
  randomArr: [],
  red: 0,
  green: 0,
  round: 0,
  gameIsFinish: false,
  currentCell: 2,
  hardMode: -1,
  levelTime: 1000,
  gameResult: null,
  rating: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.INPUT: {
      return {
        ...state,
        row: action.inputX,
        col: action.inputY,
        arr: action.gameArray
      }
    }
    case actions.CHANGE_COLOR: {
      return {
        ...state,
        arr: action.payload
      }
    }
    case actions.COUNT_RED: {
      return {
        ...state,
        red: state.red + 1
      }
    }
    case actions.SET_RANDOM_ARR: {
      return {
        ...state,
        randomArr: action.random
      }
    }
    case actions.SET_YELLOW_CELL: {
      return {
        ...state,
        arr: action.payload
      }
    }
    case actions.SET_GAME_STATUS: {
      return {
        ...state,
        gameIsFinish: action.status
      }
    }
    case actions.SET_CURRENT: {
      return {
        ...state,
        currentCell: action.current
      }
    }
    case actions.RED_ADD: {
      return {
        ...state,
        red: action.counter
      }
    }
    case actions.GREEN_ADD: {
      return {
        ...state,
        green: action.counter
      }
    }
    case actions.SET_GAME_RESULT: {
      return {
        ...state,
        gameResult: action.result
      }
    }
    case actions.TURN_HARD_MODE: {
      return {
        ...state,
        hardMode: action.hardMode
      }
    }
    case actions.SET_NEW_TIME: {
      return {
        ...state,
        levelTime: action.newTime
      }
    }
    case actions.SET_RATING: {
      return {
        ...state,
        rating: action.newRating
      }
    }
    case actions.SET_ROUND: {
      return {
        ...state,
        round: action.newRound
      }
    }
    default:
      return state
  }
}

