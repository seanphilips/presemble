import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Reserve.module.css'

export default function Reserve() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 7900 }), // $79 in cents
      })
      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error('Checkout error:', error)
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">← Back to home</Link>
        <h1>Reserve Early Access</h1>
      </header>

      <section className={styles.content}>
        <div className={styles.offer}>
          <h2>$79 Early Access</h2>
          <p>Reserve your spot. Get first access when the beta ends.</p>
          <p className={styles.terms}>
            The $79 credit applies to your purchase — or get it back if you change your mind.
          </p>

          <button
            className={styles.checkoutButton}
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Proceed to Payment'}
          </button>

          <p className={styles.note}>
            Secure payment powered by Stripe
          </p>
        </div>
      </section>
    </div>
  )
}
