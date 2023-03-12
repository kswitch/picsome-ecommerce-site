import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'

import { ContextProvider } from './components/contexts/Context'
import App from './components/App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
)