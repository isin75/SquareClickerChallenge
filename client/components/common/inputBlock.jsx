import React from 'react'
import { useDispatch } from 'react-redux'

import { input, getRandomCell } from '../../redux/func/gameFunc'
import { history } from '../../redux'
import CustomField from './customField'
import HardModeButton from './hardModeButton'

const InputBlock = () => {
  const dispatch = useDispatch()

  const handleClickFieldSize = (size) => {
    dispatch(input(size, size))
    dispatch(getRandomCell())
    history.push('/game')
  }

  const menuButtonStyle =
    'mb-1.5 transition duration-300 ease-in-out font-semibold py-2 w-48 mr-1 rounded bg-purple-600 focus:text-black hover:bg-purple-900 text-white'

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 w-[450px] h-[350px] flex flex-col items-center justify-center m-24 rounded-lg border-4 border-solid border-gray-300">
        <button type="button" className={menuButtonStyle} onClick={() => handleClickFieldSize(5)}>
          Small
        </button>
        <button type="button" className={menuButtonStyle} onClick={() => handleClickFieldSize(7)}>
          Medium
        </button>
        <button type="button" className={menuButtonStyle} onClick={() => handleClickFieldSize(9)}>
          Big
        </button>
        <CustomField />
        <HardModeButton />
      </div>
    </div>
  )
}

InputBlock.propTypes = {}

export default InputBlock