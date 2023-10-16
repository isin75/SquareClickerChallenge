import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { input, getRandomCell } from '../../redux/func/gameFunc'
import { history } from '../../redux'

const CustomField = () => {
  const [inputX, setInputX] = useState(null)
  const [inputY, setInputY] = useState(null)
  const [customButton, setCustomButton] = useState(false)
  const dispatch = useDispatch()

  const handleInputX = (e) => {
    const max = Math.floor(Math.trunc(window && window.innerHeight) / 75) || 9
    return e.target.value <= 0 ? setInputX(null) : setInputX(Math.min(e.target.value, max))
  }

  const handleInputY = (e) => {
    const max = Math.floor(Math.trunc(window && window.innerWidth) / 80) || 16
    return e.target.value <= 0 ? setInputY(null) : setInputY(Math.min(e.target.value, max))
  }

  const handleClickStart = () => {
    dispatch(input(inputX, inputY))
    dispatch(getRandomCell())
    setInputX(null)
    setInputY(null)
    history.push('/game')
  }
  return (
    <>
      <button
        type="button"
        className="mb-1.5 transition duration-300 ease-in-out bg-purple-600 focus:text-black hover:bg-purple-900 text-white font-semibold py-2 w-48 mr-1 rounded"
        onClick={() => setCustomButton(!customButton)}
      >
        Custom
      </button>
      {customButton ? (
        <div>
          <div>
            <input
              type="number"
              value={inputY}
              className="form-input mt-1 block w-48 text-center font-semibold text-gray-700 focus:text-black focus:shadow-md rounded"
              placeholder="COLS"
              onChange={handleInputY}
            />
          </div>
          <div>
            <input
              type="number"
              value={inputX}
              className="form-input mt-1 block w-48 text-center font-semibold text-gray-700 focus:text-black focus:shadow-md rounded"
              placeholder="ROWS"
              onChange={handleInputX}
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
      ) : null}
    </>
  )
}

CustomField.propTypes = {}

export default CustomField
