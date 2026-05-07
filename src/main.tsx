import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PostProvider } from './components/context/PostContext.tsx'
import { ThemeProvider } from './components/context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider> 
    <PostProvider>
      <App />
    </PostProvider> 
    </ThemeProvider>
  </StrictMode>,
)
