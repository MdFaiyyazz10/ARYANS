import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import AddData from './component/AddData'
import ReadData from './component/ReadData'

const App = () => {
  return <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/addcollege' element={<AddData />} />
    <Route path='/allcollege' element={<ReadData />} />
    </Routes>
  </Router>
}

export default App
