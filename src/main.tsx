import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes.tsx'
import { PortfolioProvider } from './context/portfolio/PortfolioProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioProvider>
      <AppRoutes>

      </AppRoutes>
    </PortfolioProvider>
  </StrictMode>,
)
