import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import EstimationProvider from './contex/AppContex'

createRoot(document.getElementById('root')).render(
  
  
  <StrictMode>
    <BrowserRouter>
    <EstimationProvider>
          <App />
    </EstimationProvider>
    </BrowserRouter>
  </StrictMode>,
)
