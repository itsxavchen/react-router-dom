import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* this enables react-router for the app components */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
