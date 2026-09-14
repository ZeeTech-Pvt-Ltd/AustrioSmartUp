import { useEffect } from 'react'
import { useCampaign } from '../App'
import Icon from '../components/Icon'

export default function ThankYou() {
  const { brand } = useCampaign()

  useEffect(() => {
    document.title = `Thank You - ${brand}`
  }, [brand])

  return (
    <main className="page thank-you">
      <div className="container">
        <div className="thank-you__card">
          <span className="thank-you__icon">
            <Icon name="check" size={30} />
          </span>
          <h1>Registration received!</h1>
          <p>
            Thank you for signing up with {brand}. Your personal manager will call you shortly to
            confirm your details and walk you through your first deposit.
          </p>
          <p className="thank-you__tip">
            Keep your phone nearby - most calls are placed within one business day.
          </p>
        </div>
      </div>
    </main>
  )
}
