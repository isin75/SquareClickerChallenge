import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeColorCell, countRed } from '../redux/reducers/game'

import Header from './common/header'
import './CSS/styles.css'

const Game = () => {
  const { arr, red, green } = useSelector((s) => s.game)
  const dispatch = useDispatch()

  const game = () => {
    const randomCell = Math.floor(Math.random() * arr.length)

    const newArr = [...arr]

    newArr[randomCell] = 'yellow'
    dispatch(changeColorCell(newArr))

    setTimeout(() => {
      const updatedArr = [...newArr]
      updatedArr[randomCell] = 'red'
      dispatch(changeColorCell(updatedArr))
      dispatch(countRed())
    }, 1000)
  }

  const startGame = () => {
    const intervalId = setInterval(() => {
      const board = arr.length
      if (red >= board / 2 && green >= board / 2) {
        return clearInterval(intervalId)
      }
      return game()
    }, 2000)
  }

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <div className="bg-gray-100 w-[450px] h-[350px] flex flex-col m-24 rounded-lg border-4 border-solid border-gray-300">
          <div className="flex flex-wrap">
            {arr.map((item, index) => (
              <div
                key={index}
                className={`m-2 w-[45px] h-[35px] rounded-lg border-4 border-solid border-gray-300 ${item}`}
              >
                {false}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button type="button" onClick={() => startGame()}>
        Start
      </button>
    </div>
  )
}

Game.propTypes = {}

export default Game
