import Link from 'next/link'
import styles from '../styles/UseCase.module.css'

export default function Documentary() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">← Back to home</Link>
        <h1>Documentary & Investigative</h1>
      </header>

      <section className={styles.content}>
        <h2>The story is in there. Somewhere.</h2>
        
        <p>
          You have terabytes of footage and a general idea of the story you want to tell. But before you can get to the creativity, you have to do hours, days, even weeks of excavation first. We call that the search tax.
        </p>
        
        <p>
          PRESEMBLE pays that for you.
        </p>
        
        <p>
          Every word of every clip is searchable. The magic moments that live in the b-roll are all available on command. Not the clips. The story inside each one.
        </p>
        
        <p>
          And when you leverage the power of your favorite LLM, something completely new is available to you. A completely different way to work. You can have conversations about the story flow, about the characters, about moments that you might not have realized were even there.
        </p>
        
        <p>
          You can build multiple versions of the story instantly. You can change the complete narrative arc in seconds without having to scrub a single clip.
        </p>
        
        <p>
          And not one moment of footage needs to ever leave your hard drive.
        </p>
        
        <p>
          There is literally nothing else anywhere that can do all that.
        </p>
        
        <p>
          AI should never be used to take over your creativity. It's there to get you to the fun part faster.
        </p>
        
        <p>
          That's what PRESEMBLE does.
        </p>

        <div className={styles.pricing}>
          <h3>The Economics</h3>
          <p>
            Documentary and investigative work means excavation. You're spending <strong>weeks searching through terabytes</strong> before you even get to the creative work. That's thousands in labor before the real editing starts.
          </p>
          <p>
            PRESEMBLE collapses the search phase. You don't eliminate the excavation—you skip the scrub and go straight to the story.
          </p>
          <p>
            <strong>$79 beta access</strong> — Full software, all features, local storage only. When we launch at $799, your $79 is a credit toward the full price.
          </p>
          <p>
            One project justifies the full year's investment. Everything after that is pure time back.
          </p>
        </div>
      </section>

      <section className={styles.ctas}>
        <button className={styles.primary}>
          <a href="https://buy.stripe.com/aFaeV62kA65s2zhaoE2go00" target="_blank" rel="noopener noreferrer">Reserve Early Access — $79</a>
        </button>
        <button className={styles.secondary}>
          <a href="/enterprise">Schedule Consultation</a>
        </button>
      </section>
    </div>
  )
}
