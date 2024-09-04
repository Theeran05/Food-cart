import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Header } from './components/Header.jsx'
import App from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
