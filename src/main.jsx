import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/global/index.css'
import './assets/css/global/hover.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
