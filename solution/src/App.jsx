import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage.jsx"
import SpotsPage from "./pages/SpotsPage.jsx"
import GalleryPage from "./pages/GalleryPage.jsx"
import NotFoundPage from './pages/NotFoundPage.jsx'
import CommunityPage from "./pages/CommunityPage.jsx"
import FavoritePage from "./pages/FavoritePage.jsx"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="spots" element={<SpotsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  )
}

export default App
