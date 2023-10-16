import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setHardMode } from '../../redux/func/gameFunc'

const HardModeButton = () => {
  const dispatch = useDispatch()

  const { hardMode } = useSelector((s) => s.game)
  const hardButtonBackground = hardMode > 0 ? 'bg-red-700' : 'bg-transparent'

  const hardModeButtonClick = () => {
    dispatch(setHardMode())
  }

  return (
    <button
      type="button"
      className={`transition duration-300 ease-in-out border-8 border-red-700 ${hardButtonBackground} text-black font-bold py-1.5 w-48 mr-1 rounded`}
      onClick={() => hardModeButtonClick()}
    >
      Hardmode <span>{hardMode > 0 ? 'ON' : 'OFF'}</span>
    </button>
  )
}

HardModeButton.propTypes = {}

export default HardModeButton