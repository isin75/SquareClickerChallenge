import React from 'react'
import { useDispatch } from 'react-redux'

import { history } from '../../redux'
import {
  redCellAdd,
  greenCellAdd,
  gameFinish,
  setGameResult,
  setRound,
  setRating
} from '../../redux/func/gameFunc'

const Header = () => {
  const dispatch = useDispatch()
  const handleClickBack = () => {
    dispatch(redCellAdd(0))
    dispatch(greenCellAdd(0))
    dispatch(gameFinish(false))
    dispatch(setGameResult(null))
    dispatch(setRound(0))
    dispatch(setRating(0, true))
    history.push('/')
  }
  return (
    <div className="bg-gray-100 h-16 flex justify-center items-center rounded-b-lg border-b-4 border-gray-300 border-solid">
      <button
        type="button"
        className="font-extrabold text-2xl font-serif "
        onClick={() => handleClickBack()}
      >
        Square clicker challenge
      </button>
    </div>
  )
}

Header.propTypes = {}

export default Header