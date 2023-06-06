import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar/navbar'
import Banner from './banner/banner'
import Content from './content/content'
import './css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    <Content />
  </React.StrictMode>,
)
