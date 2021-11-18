import * as React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
  // Link,
  // Outlet,
  // useParams,
  // NavLink,
  // useNavigate,
  // useLocation,
} from 'react-router-dom'
import './style/global.css'
import './style/variables.css'
import Loading from './components/loading'
import { Layout } from './layout'
import { DeepDive, Development, HomePage, EditorDrawer, JsonTree } from './pages'
import { NoMatch } from './pages/no-match/NoMatch'
import Hero from './pages/tree-view/Hero'

const WaitingCompLoader = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      minHeight: 50,
      flexShrink: 0,
    }}>
    <Loading />
  </div>
)

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<WaitingCompLoader />}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='drawer' element={<EditorDrawer />} />
            <Route path='richtreeview' element={<Hero />} />
            <Route path='deepdive' element={<DeepDive />} />
            <Route path='development' element={<Development />} />
            <Route path='jsjsontree' element={<JsonTree />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  )
}

export default App
