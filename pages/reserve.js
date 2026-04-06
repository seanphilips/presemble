import { useEffect } from 'react'

export default function Reserve() {
  useEffect(() => {
    // Redirect to Stripe payment link
    window.location.href = 'https://buy.stripe.com/aFaeV62kA65s2zhaoE2go00'
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#0a0a0f', color: '#fff' }}>
      <p>Redirecting to payment...</p>
    </div>
  )
}
