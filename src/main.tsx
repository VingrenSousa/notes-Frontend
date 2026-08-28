import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Details from './pages/details'
import { ThemeProvider } from 'styled-components'
import Thema from './styles/thema'
import GlobalStyles from './styles/global'
const root= document.getElementById('root')

createRoot(root!).render(
  <StrictMode>
    <ThemeProvider  theme={Thema}>
      <GlobalStyles/>
      <Details/>
    </ThemeProvider>
  </StrictMode>
)
