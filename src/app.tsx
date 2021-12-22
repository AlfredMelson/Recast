import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/global.css'
import './style/variables.css'
import { Layout } from './layout'
import { APIJson, DeepDive, Development, HomePage } from './pages'
import { NoMatch } from './pages/no-match/NoMatch'
import Hero from './pages/tree-view/Hero'
import LoadingTest from './components/loading/LoadingTest'

// Route path='*' element={<NoMatch />} handles all unaccounted routes

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<>...</>}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='tree-view' element={<Hero />} />
            <Route path='deep-dive' element={<DeepDive />} />
            <Route path='development' element={<Development />} />
            <Route path='api-json' element={<APIJson />} />
            <Route path='loading' element={<LoadingTest />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  )
}

export default App
