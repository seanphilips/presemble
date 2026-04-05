import Link from 'next/link'
import styles from '../styles/Reserve.module.css'

export default function Success() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.offer}>
          <h2>Thank you.</h2>
          <p>Your reservation is confirmed.</p>
          <p>
            You'll be the first to know when PRESEMBLE beta launches. We'll send you early access details to the email you provided.
          </p>
          <p style={{ marginTop: '40px', fontSize: '0.9rem', color: '#999' }}>
            In the meantime, check out the workflows and let us know if you have questions.
          </p>
          <Link href="/">
            <button style={{ marginTop: '30px', backgroundColor: '#1a1a1a', color: 'white', padding: '12px 24px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
