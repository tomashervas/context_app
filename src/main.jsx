import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './UserProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
{/*     <React.StrictMode>*/}
  <UserProvider>
    <App />
  </UserProvider>
{/*     </React.StrictMode>*/}  
  </BrowserRouter>
)
