import NumberCounter from './components/NumberCounter'
import AlphabetCounter from './components/AlphabetCounter'
import ApiFetchComponent from './components/ApiFetchComponent'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Fragment } from 'react'
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/number' element={<NumberCounter />} />
          <Route path='/alphabet' element={<AlphabetCounter />} />
          <Route path='/saga' element={<ApiFetchComponent />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App
