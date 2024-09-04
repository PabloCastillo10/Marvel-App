import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MarvelApp } from './components/MarvelApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarvelApp />
  </StrictMode>,
)
