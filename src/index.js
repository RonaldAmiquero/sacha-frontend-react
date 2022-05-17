import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globalStyles.css'
import { App } from './routes/App'
import { BrowserRouter } from 'react-router-dom'
import { ContextWrapper } from './context/AppContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <ContextWrapper>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ContextWrapper>
   </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
