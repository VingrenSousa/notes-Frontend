import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { ThemeProvider } from 'styled-components'
import Thema from './styles/thema'
import GlobalStyles from './styles/global'



import Routes from './router'
import { AuthProvider } from './hooks/auth'





const root= document.getElementById('root')

createRoot(root!).render(
  <StrictMode>
    <ThemeProvider  theme={Thema}>
      <GlobalStyles/>
      <AuthProvider>
       <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
