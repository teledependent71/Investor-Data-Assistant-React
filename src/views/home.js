import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Data Assistant</title>
        <meta property="og:title" content="Investor Data Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
