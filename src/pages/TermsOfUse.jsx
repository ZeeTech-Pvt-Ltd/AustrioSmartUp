import LegalPage from './LegalPage'

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="These terms govern your use of this website. By accessing it or registering an account you agree to them in full."
      sections={[
        {
          heading: '1. The service',
          body: [
            'This website introduces a software platform that analyses financial markets. It does not buy or sell assets on your behalf and it does not hold client funds. Any trading you choose to do is executed through the broker your personal manager connects you with, under that broker’s own terms.',
            'We may update the service, its features and its availability at any time without notice.',
          ],
        },
        {
          heading: '2. Eligibility',
          body: [
            'You must be at least 18 years old to use this website and any service described on it. By submitting the registration form you confirm that you meet this requirement and that all information you provide is accurate and current.',
          ],
        },
        {
          heading: '3. Your account',
          body: [
            'You are responsible for keeping your contact details up to date and for the security of any credentials issued to you. Notify us immediately if you believe your details have been misused.',
          ],
        },
        {
          heading: '4. No financial advice',
          body: [
            'Nothing on this website is financial, investment or tax advice. Market data, signals and examples are informational only. You are solely responsible for your trading decisions and for any losses you incur.',
          ],
        },
        {
          heading: '5. Limitation of liability',
          body: [
            'The website is provided “as is”. To the maximum extent permitted by law we disclaim liability for any direct or indirect loss arising from your use of the website, including trading losses, loss of data or loss of profit.',
          ],
        },
        {
          heading: '6. Intellectual property',
          body: [
            'All content on this website - text, graphics, logos and software - is our property or used under licence. You may not copy or redistribute it without written permission.',
          ],
        },
        {
          heading: '7. Changes to these terms',
          body: [
            'We may revise these terms at any time. The version published on this page is the one in force. Continued use of the website after a change means you accept the revised terms.',
          ],
        },
        {
          heading: '8. Contact',
          body: [
            'Questions about these terms can be sent to the support address listed in the footer of this website.',
          ],
        },
      ]}
    />
  )
}
