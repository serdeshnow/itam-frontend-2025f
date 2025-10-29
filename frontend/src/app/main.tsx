import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Providers } from './providers'

import '../shared/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
)
