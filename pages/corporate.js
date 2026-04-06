import Link from 'next/link'
import styles from '../styles/UseCase.module.css'

export default function Corporate() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">← Back to home</Link>
        <h1>Corporate Event Videography</h1>
      </header>

      <section className={styles.content}>
        <h2>The story is in there. Somewhere.</h2>
        
        <p>
          You've shot the conference. Keynotes, panels, networking moments. Your client wants three different edits: the official recap, the sponsor highlight reel, the social cut. All by Wednesday afternoon.
        </p>
        
        <p>
          With PRESEMBLE you can get three rough cuts in a prompt and two clicks.
        </p>
        
        <p>
          And when they come to you at noon on Wednesday with a new direction. You're done by 2:00 p.m.
        </p>

        <div className={styles.pricing}>
          <h3>The Economics</h3>
          <p>
            Corporate events mean revisions. You're building multiple cuts, pivoting directions, burning hours searching for the right moments. That's <strong>$500–$1,500 in rushed, unpaid labor per event</strong>.
          </p>
          <p>
            With PRESEMBLE, those revisions take minutes instead of hours. One corporate event covers the entire year's software cost.
          </p>
          <p>
            <strong>$79 puts you on the early access waitlist.</strong> When we launch, you get first access. Full software costs $799 (one-time, no subscription). Your $79 becomes a credit toward that price.
          </p>
          <p>
            Land one more event. That's your software paid for, and pure profit after that.
          </p>
        </div>
      </section>

      <section className={styles.ctas}>
        <button className={styles.primary}>
          <a href="https://buy.stripe.com/aFaeV62kA65s2zhaoE2go00" target="_blank" rel="noopener noreferrer">Get on the Early Access Waitlist — $79</a>
        </button>
      </section>
    </div>
  )
}
