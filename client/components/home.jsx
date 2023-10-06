import React from 'react'

import Head from './head'
import Header from './common/header'
import InputBlock from './common/inputBlock'

const Home = () => {

  return (
    <div>
      <Head title="Square clicker challenge" />
      <Header />
      <InputBlock />
    </div>
  )
}

Home.propTypes = {}

export default Home
