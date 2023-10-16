import actions from '../Actions/action'

export function input(inputX, inputY) {
  const arrLength = inputX * inputY
  const gameArray = Array(arrLength).fill('0')
  return { type: actions.INPUT, inputX, inputY, gameArray }
}

export function getRandomCell() {
  return (dispatch, getState) => {
    const gameArray = getState().game.arr
    const randomArray = Array(gameArray.length)
      .fill(0)
      .map((item, index) => index)
      .sort(() => Math.random() - 0.5)
    dispatch({ type: actions.SET_RANDOM_ARR, random: randomArray })
  }
}

export function removeUsedCell(ind) {
  return (dispatch, getState) => {
    const { randomArr } = getState().game

    const removeRandomCell = randomArr.filter((item) => item !== ind)
    dispatch({ type: actions.SET_RANDOM_ARR, random: removeRandomCell })
  }
}

export function setCell(ind, status) {
  return (dispatch, getState) => {
    const { arr } = getState().game

    const updateCell = arr.map((item, index) => (index === ind ? status : item))
    dispatch({ type: actions.SET_YELLOW_CELL, payload: updateCell })
  }
}

export function gameFinish(status) {
  return { type: actions.SET_GAME_STATUS, status }
}

export function setCurrent(stat) {
  return { type: actions.SET_CURRENT, current: stat }
}

export function redCellAdd(number = 1) {
  return (dispatch, getState) => {
    const { red } = getState().game
    if (number === 1) {
      dispatch({ type: actions.RED_ADD, counter: red + number })
    } else if (number === 0) {
      dispatch({ type: actions.RED_ADD, counter: 0 })
    }
  }
}

export function greenCellAdd(number = 1) {
  return (dispatch, getState) => {
    const { green } = getState().game
    if (number === 1) {
      dispatch({ type: actions.GREEN_ADD, counter: green + number })
    } else if (number === 0) {
      dispatch({ type: actions.GREEN_ADD, counter: 0 })
    }
  }
}

export function setGameResult(result) {
  return { type: actions.SET_GAME_RESULT, result }
}

export function setHardMode() {
  return (dispatch, getState) => {
    const { hardMode } = getState().game
    dispatch({ type: actions.TURN_HARD_MODE, hardMode: hardMode * -1 })
  }
}

export function setNewTime(reset) {
  return (dispatch, getState) => {
    const { levelTime } = getState().game
    let newTime = reset ? 1000 : levelTime - levelTime * 0.05
    if (newTime < 500) newTime = 500
    dispatch({ type: actions.SET_NEW_TIME, newTime })
  }
}

export function setRating(points, reset) {
  return (dispatch, getState) => {
    const { rating, hardMode } = getState().game

    const hardModePoints = hardMode > 0 ? 0.2 : 0

    const newRating = reset ? 0 : Math.max(rating + points + hardModePoints, 0)
    dispatch({ type: actions.SET_RATING, newRating })
  }
}

export function setRound(num) {
  return { type: actions.SET_ROUND, newRound: num }
}

export function game(ind = 0, times) {
  return (dispatch, getState) => {
    const { arr, randomArr, gameIsFinish, currentCell, red, green, hardMode, levelTime } =
      getState().game
    const { length } = arr
    const time = times || Math.max(levelTime, 500)

    if (red >= length / 2 || green >= length / 2) {
      dispatch(gameFinish(true))
    }

    if (!gameIsFinish) {
      dispatch(setCell(randomArr[ind], 1))
      if (ind) {
        if (currentCell === 2) {
          dispatch(redCellAdd())
          dispatch(setRating(-0.5))
          dispatch(setCell(randomArr[ind - 1], currentCell))
        }
        dispatch(setCurrent(2))
      }

      let newTime = time
      if (hardMode > 0 && currentCell === 3) {
        newTime -= time * 0.05
        if (newTime < 500) newTime = 500
      }
      if (hardMode > 0 && currentCell === 2) {
        newTime += time * 0.05
        if (newTime > levelTime) newTime = levelTime
      }

      setTimeout(() => dispatch(game(ind + 1, newTime)), time)
      if (ind >= length) dispatch(gameFinish(true))
    }
    if (gameIsFinish) {
      dispatch(setGameResult(green > red ? 'You Win!' : 'Game Over'))
      dispatch(redCellAdd(0))
      dispatch(greenCellAdd(0))
    }
  }
}