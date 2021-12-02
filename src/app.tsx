import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/global.css'
import './style/variables.css'
import { Layout } from './layout'
import { DeepDive, Development, HomePage, APIJson } from './pages'
import { NoMatch } from './pages/no-match/NoMatch'
import Hero from './pages/tree-view/Hero'
import LoadingTest from './components/loading/LoadingTest'

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<LoadingTest />}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='richtreeview' element={<Hero />} />
            <Route path='deepdive' element={<DeepDive />} />
            <Route path='development' element={<Development />} />
            <Route path='apijson' element={<APIJson />} />
            <Route path='loading' element={<LoadingTest />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  )
}

export default App
