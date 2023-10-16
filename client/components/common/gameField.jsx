import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  setCell,
  greenCellAdd,
  setRating,
  setCurrent,
  redCellAdd,
  removeUsedCell,
  setRound
} from '../../redux/func/gameFunc'

const GameField = () => {
  const { arr, col, levelTime, hardMode, round } = useSelector((s) => s.game)
  const dispatch = useDispatch()

  const handleClickCell = (index) => {
    dispatch(setCell(index, 3))
    dispatch(greenCellAdd())
    dispatch(setRating(1 / (levelTime / 1000)))
    dispatch(setCurrent(3))
    dispatch(setRound(round + 1))
  }

  const handleClickGrayCell = (index) => {
    dispatch(redCellAdd())
    dispatch(removeUsedCell(index))
    dispatch(setRating(-0.6))
    dispatch(setCell(index, 2))
    dispatch(setRound(round + 1))
  }

return (
  <div
    className="flex flex-wrap mx-auto my-4 justify-center items-center"
    style={{ width: `${col * 11 * 0.25}rem` }}
  >
    {arr.map((item, index) => {
      const disabled = item === 1 || (item === 0 && hardMode === 1) ? 0 : 1

      const color = {
        0: 'bg-gray-500',
        1: 'bg-yellow-500',
        2: 'bg-red-600',
        3: 'bg-green-500'
      }

      return (
        <button
          key={index}
          type="button"
          disabled={disabled}
          className={`w-8 h-8 items-center justify-center border border-black m-1 ${color[item]}`}
          onClick={() => (item === 1 ? handleClickCell(index) : handleClickGrayCell(index))}
        >
          {null}
        </button>
      )
    })}
  </div>
)
}

GameField.propTypes = {}

export default GameField