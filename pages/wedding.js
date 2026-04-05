import Link from 'next/link'
import styles from '../styles/UseCase.module.css'

export default function Wedding() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">← Back to home</Link>
        <h1>Wedding & Events</h1>
      </header>

      <section className={styles.content}>
        <h2>The story is in there. Somewhere.</h2>
        
        <p>
          It's Sunday morning and you're staring at terabytes of footage. You promised the couple you'd have a highlights edit by Tuesday. That means your whole weekend is gone.
        </p>
        
        <p>
          But with PRESEMBLE you plug in the hard drive and enjoy a lazy Sunday with the family. Because Monday morning, every word in the footage and every moment in the b-roll is already at your fingertips.
        </p>
        
        <p>
          And the real magic is when you drop the transcripts in the LLM and build an entire rough cut in two clicks and a prompt. There's literally nothing out there that can do all of this for you without a single clip leaving your hard drive.
        </p>
        
        <div className={styles.video}>
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/JcXzKkNpLS8"
            title="PRESEMBLE Wedding Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
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
