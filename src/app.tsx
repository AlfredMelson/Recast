import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './layout'
import { APIJson, DeepDive, Development, HomePage } from './pages'
import { NoMatch } from './pages/no-match/NoMatch'
import TreeviewHero from './pages/tree-view/TreeviewHero'
import LoadingTest from './components/loading/LoadingTest'

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<>...</>}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='tree-view' element={<TreeviewHero />} />
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
