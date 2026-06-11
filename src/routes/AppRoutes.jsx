import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import { PATHS } from '../constants/PATHS'

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path={PATHS.HOME} element={<Home />} /> */}
      <Route path="/" element={<Home />} />
      <Route path={PATHS.ABOUT} element={<About />} />
    </Routes>
  )
}