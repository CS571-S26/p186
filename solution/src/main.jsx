import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { FavoritesProvider } from "./components/FavoritesContext";

createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
  <HashRouter>
    <App />
  </HashRouter>
  </FavoritesProvider>
)




  

