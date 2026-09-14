import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InputBox from './assets/InputBox/InputBox.jsx'
import Greeting from './assets/Greeting/Greeting.jsx'
import SearchInput from './SearchInput.jsx'
import ComplaintResult from './ComplaintResult.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <InputBox />
    <Greeting /> */}
    <SearchInput />
    <ComplaintResult />
  </StrictMode>,
)
