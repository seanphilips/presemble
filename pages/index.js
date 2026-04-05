import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>PRESEMBLE</h1>
        <p>Skip the search tax. Get straight to the story.</p>
      </header>

      <section className={styles.hero}>
        <h2>The story is in there. Somewhere.</h2>
        <p>
          But to find it you have to pay the search tax. Hours, days, even weeks of scrubbing, and logging, and searching.
        </p>
        <p>
          Presemble pays the tax for you.
        </p>
        <p>
          Every word. Every moment. At your fingertips. Not just the clips, the moments inside them that really matter.
        </p>
        <p>
          Go from raw footage to rough cut in two clicks and a prompt. And your footage never leaves your hard drive.
        </p>
        <p>
          No cloud. No subscription.
        </p>
        <p>
          Nothing else even comes close.
        </p>
        <p className={styles.tagline}>
          <strong>Skip the search tax. Get straight to the story.</strong>
        </p>
      </section>

      <section className={styles.heroVideo}>
        <div className={styles.videoContainer}>
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/JcXzKkNpLS8"
            title="PRESEMBLE Demo"
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

      <section className={styles.comparison}>
        <h3>Your assistant editor on steroids.</h3>
        <p>
          PRESEMBLE knows every word in every clip and can find every meaningful moment in every beautiful b-roll shot. Instantly.
        </p>
        <p>
          You could spend 3 days scrubbing and naming clips, then use four plugins that cost you hundreds of dollars a month. Or you could use PRESEMBLE and have an all-in-one solution that gets you done before your tea gets cold.
        </p>
        <table className={styles.compTable}>
          <tbody>
            <tr>
              <th>What you'd do without PRESEMBLE</th>
              <th>What PRESEMBLE does</th>
              <th>Why it's different</th>
            </tr>
            <tr>
              <td>Use 4-5 plugins + manual scrubbing</td>
              <td>One unified app</td>
              <td>No context switching, no manual labor</td>
            </tr>
            <tr>
              <td>Upload to cloud service</td>
              <td>Keep everything local</td>
              <td>Data security + speed</td>
            </tr>
            <tr>
              <td>Remove silence plugin → remove filler → manually find moments</td>
              <td>Semantic search + assembly</td>
              <td>Everything at once, controllable</td>
            </tr>
            <tr>
              <td>Edit in Premiere/Resolve with messy timeline</td>
              <td>Open clean rough cut in Premiere/Resolve</td>
              <td>90% done before you start</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.usecases}>
        <h3>Choose your workflow</h3>
        <div className={styles.usecaseGrid}>
          <Link href="/documentary">
            <div className={styles.usecase}>
              <h4>Documentary & Investigative</h4>
              <p>Paper edit to rough cut in a tenth of the time</p>
            </div>
          </Link>
          <Link href="/corporate">
            <div className={styles.usecase}>
              <h4>Corporate Event Video</h4>
              <p>Three rough cuts by Friday. Without the all-nighters.</p>
            </div>
          </Link>
          <Link href="/wedding">
            <div className={styles.usecase}>
              <h4>Wedding & Events</h4>
              <p>The moments are in there. Somewhere.</p>
            </div>
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Presemble. Raw to roughcut. Skip the search tax.</p>
        <p className={styles.footnote}>Coming to presemble.ai</p>
      </footer>
    </div>
  )
}
