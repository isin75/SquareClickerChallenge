const INPUT = 'squareClickerChallenge/game/INPUT'
const CHANGE_COLOR = 'squareClickerChallenge/game/CHANGE_COLOR'
const COUNT_RED = 'squareClickerChallenge/game/COUNT_RED'

const initialState = {
  x: 0,
  y: 0,
  arr: [],
  red: 0,
  green: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT: {
      return {
        ...state,
        x: action.inputX,
        y: action.inputY,
        arr: action.gameArray
      }
    }
    case CHANGE_COLOR: {
      return {
        ...state,
        arr: action.payload
      }
    }
    case COUNT_RED: {
      return {
        ...state,
        red: state.red + 1
      }
    }
    default:
      return state
  }
}

export function input(inputX, inputY) {
  const arrLength = (inputX * inputY)
  const gameArray = Array(arrLength).fill('gray')
  return { type: INPUT, inputX, inputY, gameArray }
}

export function changeColorCell(newArr) {
  return { type: CHANGE_COLOR, payload: newArr}
}

export function countRed() {
  return { type: COUNT_RED }
}