import { createContext, useContext, useEffect } from 'react'
import { Outlet, useLocation, useSearchParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { DEFAULT_OFFER_NAME, SITE_NAME } from './data/content'

// Campaign context: the ?f= keyword param names the brand shown on the
// page and is sent as offerName with every lead. &subid= tags the source.
export const CampaignContext = createContext({
  brand: SITE_NAME,
  offerName: DEFAULT_OFFER_NAME,
  subid: '',
})

export function useCampaign() {
  return useContext(CampaignContext)
}

// On navigation, jump to the #hash target if there is one, else top.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  const [searchParams] = useSearchParams()
  const f = searchParams.get('f')?.trim() || ''
  const subid = searchParams.get('subid')?.trim() || ''
  const brand = f || SITE_NAME

  const campaign = { brand, offerName: f || DEFAULT_OFFER_NAME, subid }

  useEffect(() => {
    document.title = `${brand} - Smart Trading Made Simple`
  }, [brand])

  return (
    <CampaignContext.Provider value={campaign}>
      <ScrollManager />
      <Navbar />
      <Outlet />
      <Footer />
    </CampaignContext.Provider>
  )
}
