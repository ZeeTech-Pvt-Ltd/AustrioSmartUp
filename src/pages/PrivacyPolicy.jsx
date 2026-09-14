import LegalPage from './LegalPage'

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what personal data we collect when you use this website, why we collect it and how it is handled."
      sections={[
        {
          heading: '1. Data we collect',
          body: [
            'When you submit the registration form we collect your first name, last name, email address and phone number, together with the marketing parameter values present in the page URL (for example the f and subid parameters).',
            'We also collect limited technical data automatically, such as browser type, device category and approximate location derived from your IP address.',
          ],
        },
        {
          heading: '2. How we use your data',
          body: [
            'Your contact details are used to arrange the callback from a personal manager and to set up your account with the broker partner you are introduced to.',
            'Technical data is used to keep the website secure and to understand how visitors use it.',
          ],
        },
        {
          heading: '3. Legal basis and sharing',
          body: [
            'We process your data on the basis of the consent you give when you tick the consent box and submit the form.',
            'Data is shared only with the partners needed to deliver the service: the broker platform that opens your account and the infrastructure providers that deliver the website and the form. We never sell your personal data.',
          ],
        },
        {
          heading: '4. Storage and security',
          body: [
            'Form data is transmitted over an encrypted (TLS) connection and stored on secured servers. It is kept only as long as needed for the purposes above or as long as the law requires.',
          ],
        },
        {
          heading: '5. Cookies',
          body: [
            'The website uses only essential cookies required for it to function, such as session state. We do not use advertising cookies on this site.',
          ],
        },
        {
          heading: '6. Your rights',
          body: [
            'Depending on your jurisdiction you may have the right to access, correct or delete your personal data, to withdraw consent and to object to processing. To exercise any of these rights, contact the support address listed in the footer.',
          ],
        },
        {
          heading: '7. Changes to this policy',
          body: [
            'We may update this policy from time to time. The version published on this page is the one in force.',
          ],
        },
      ]}
    />
  )
}
