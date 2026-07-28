import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Button  from './components/atoms/Button/'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Button variant="primary" size='sm'>Button</Button>
    <Button variant="ghost" size='sm'>Button</Button>
    <Button variant="outline" size='sm'>Button</Button>
  </StrictMode>,
)
