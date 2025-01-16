import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com',target:'_blank'},
//   'Click here to visit google'
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)