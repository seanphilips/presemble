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
      </section>

      <section className={styles.ctas}>
        <button className={styles.primary}>
          <a href="/reserve">Reserve Early Access — $79</a>
        </button>
        <button className={styles.secondary}>
          <a href="/enterprise">Schedule Consultation</a>
        </button>
      </section>
    </div>
  )
}
