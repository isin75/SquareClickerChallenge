import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game } from '../redux/func/gameFunc'
import Header from './common/header'
import GameField from './common/gameField'
import EndOfGame from './common/endOfGame'

const Game = () => {
  const { round, rating, gameIsFinish } = useSelector((s) => s.game)
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(game())
    }, 1000)
  }, [dispatch])
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-100 mt-24 mb-8 rounded-lg border-4 border-solid border-gray-300">
          {gameIsFinish ? <EndOfGame /> : <GameField />}
        </div>
        <div className="text-black font-bold">Level: {round}</div>
        <div className="text-black font-bold">Score: {Math.trunc(rating * 100)}</div>
      </div>
    </div>
  )
}

Game.propTypes = {}

export default Game
