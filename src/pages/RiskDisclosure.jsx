import LegalPage from './LegalPage'

export default function RiskDisclosure() {
  return (
    <LegalPage
      title="Risk Disclaimer"
      intro="Please read this disclaimer carefully before using this website or any service described on it."
      sections={[
        {
          heading: '1. High-risk products',
          body: [
            'Trading FX, CFDs and cryptocurrencies involves high risk and may not be suitable for all investors. Prices move quickly and leverage can multiply losses as well as gains. You could lose some or all of your initial deposit, and in some circumstances losses can exceed your deposit.',
            'Never trade with money you cannot afford to lose.',
          ],
        },
        {
          heading: '2. No guarantee of results',
          body: [
            'Past performance, examples, testimonials and figures shown on this website do not guarantee future results. Market outcomes are unpredictable and no software can eliminate trading risk.',
          ],
        },
        {
          heading: '3. Informational purpose only',
          body: [
            'This website is for informational purposes only and does not constitute financial, investment or tax advice. Before trading, consider your objectives, experience and risk appetite, and seek independent advice if you are unsure.',
          ],
        },
        {
          heading: '4. Regional availability',
          body: [
            'The services described may not be available in your country of residence. It is your responsibility to ensure that using them is legal where you live.',
          ],
        },
        {
          heading: '5. Marketing content',
          body: [
            'Names, images and testimonials on this website are used for illustration. We may receive referral commissions when you sign up with a partner platform through this website.',
          ],
        },
      ]}
    />
  )
}
