import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-100 h-16 flex justify-center items-center rounded-b-lg border-b-4 border-gray-300 border-solid'>
      <Link className='font-extrabold text-2xl font-serif ' to="/">Square clicker challenge</Link>
    </div>
  )
}

Header.propTypes = {}

export default Header