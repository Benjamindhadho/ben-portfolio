import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './comps/HomePage'
import ProjectPage from './comps/ProjectPage'
import AboutPage from './comps/AboutPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


