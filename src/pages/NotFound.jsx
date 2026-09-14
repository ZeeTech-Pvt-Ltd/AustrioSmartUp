import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="page not-found">
      <div className="container">
        <div className="thank-you__card">
          <h1>404</h1>
          <p>The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn--primary">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
