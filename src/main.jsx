import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// All pages are imported eagerly. They are tiny, so this adds a few KB
// to the entry bundle - but it guarantees every page renders on the
// first click on any hosting, with no chunk-fetch failures.
import Home from './pages/Home'
import ThankYou from './pages/ThankYou'
import TermsOfUse from './pages/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RiskDisclosure from './pages/RiskDisclosure'
import NotFound from './pages/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="terms" element={<TermsOfUse />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="risk-disclosure" element={<RiskDisclosure />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
