import React from 'react'
import Quiz from './Components/Quiz/Quiz'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Quiz />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
