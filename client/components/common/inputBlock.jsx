import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { input } from '../../redux/reducers/game'
import { history } from '../../redux'

const InputBlock = () => {
  const [inputX, setInputX] = useState(0)
  const [inputY, setInputY] = useState(0)
  const dispatch = useDispatch()

  const handleInputX = (e) => {
    setInputX(e.target.value)
  }

  const handleInputY = (e) => {
    setInputY(e.target.value)
  }

  const handleClickStart = () => {
    dispatch(input(inputX, inputY))
    setInputX(0)
    setInputY(0)
    history.push('/game')
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 w-[450px] h-[350px] flex flex-col m-24 rounded-lg border-4 border-solid border-gray-300">
        <div className="flex flex-col justify-center items-center m-4">
          <div className="font-serif font-semibold text-lg">Enter number of lines</div>
          <input
            value={inputX}
            onChange={(e) => handleInputX(e)}
            className="font-serif font-semibold text-base m-3 rounded-lg border-4 border-solid border-gray-300"
            type="number"
          />
        </div>
        <div className="flex flex-col justify-center items-center m-4">
          <div className="font-serif font-semibold text-lg">Enter the number of columns</div>
          <input
            className="font-serif font-semibold text-base m-3 rounded-lg border-4 border-solid border-gray-300"
            type="number"
            value={inputY}
            onChange={(e) => handleInputY(e)}
          />
        </div>
        <div className="flex flex-col justify-center items-center m-4">
          <button
            onClick={() => handleClickStart()}
            className="font-serif font-semibold text-lg bg-gray-200 rounded-lg border-2 border-solid border-gray-400 p-2"
            type="button"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  )
}

InputBlock.propTypes = {}

export default InputBlock