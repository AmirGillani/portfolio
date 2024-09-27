import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className=' overflow-x-hidden bg-black tracking-tighter text-gray-200 antialised'> 
      <App />
    </main>
  </React.StrictMode>,
)
