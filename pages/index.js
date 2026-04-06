import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SignupForm from '../components/SignupForm'

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

      <section className={styles.costSavings}>
        <h3>The Real Economics</h3>
        <p><strong>Join the waitlist for early access.</strong> Full product: $799 (one-time, no subscription). Early access members get first priority when we launch.</p>
        
        <div className={styles.taskBreakdown}>
          <div className={styles.task}>
            <h4>Renaming & organizing footage</h4>
            <p className={styles.traditional}>Traditional: 4–6 hours @ $60/hr</p>
            <p className={styles.cost}>⏱️ 4–6 hours | 💰 $240–$360</p>
            <p className={styles.presemble}>PRESEMBLE: Eliminated</p>
            <p className={styles.savings}>⏱️ Save 4–6 hours | 💰 $240–$360</p>
          </div>

          <div className={styles.task}>
            <h4>Transcription</h4>
            <p className={styles.traditional}>Traditional: 2–4 hours or $100–200 service</p>
            <p className={styles.cost}>⏱️ 2–4 hours | 💰 $120–$240</p>
            <p className={styles.presemble}>PRESEMBLE: Automatic</p>
            <p className={styles.savings}>⏱️ Save 2–4 hours | 💰 $120–$240</p>
          </div>

          <div className={styles.task}>
            <h4>Rewriting narratives & story flows</h4>
            <p className={styles.traditional}>Traditional: 3–5 iterations × 2 hours each</p>
            <p className={styles.cost}>⏱️ 6–10 hours | 💰 $360–$600</p>
            <p className={styles.presemble}>PRESEMBLE: Infinite LLM iterations @ zero time</p>
            <p className={styles.savings}>⏱️ Save 6–10 hours | 💰 $360–$600</p>
          </div>

          <div className={styles.task}>
            <h4>Reframing stories & rebuilding timelines</h4>
            <p className={styles.traditional}>Traditional: 8–12 hours of scrubbing & recutting</p>
            <p className={styles.cost}>⏱️ 8–12 hours | 💰 $480–$720</p>
            <p className={styles.presemble}>PRESEMBLE: 30 minutes of prompting</p>
            <p className={styles.savings}>⏱️ Save 7–11 hours | 💰 $450–$690</p>
          </div>

          <div className={styles.task}>
            <h4>Extracting clips from long-form content</h4>
            <p className={styles.traditional}>Traditional: 4–6 hours of watching & selecting</p>
            <p className={styles.cost}>⏱️ 4–6 hours | 💰 $240–$360</p>
            <p className={styles.presemble}>PRESEMBLE: 10 minutes of prompting</p>
            <p className={styles.savings}>⏱️ Save 4–6 hours | 💰 $230–$350</p>
          </div>

          <div className={styles.task}>
            <h4>Client revisions & iterations</h4>
            <p className={styles.traditional}>Traditional: 2–4 hours per revision cycle</p>
            <p className={styles.cost}>⏱️ 2–4 hours | 💰 $120–$240</p>
            <p className={styles.presemble}>PRESEMBLE: LLM + prompt = minutes</p>
            <p className={styles.savings}>⏱️ Save 2–3 hours | 💰 $100–$200</p>
          </div>

          <div className={styles.task}>
            <h4>Exporting deliverables</h4>
            <p className={styles.traditional}>Traditional: 1–2 hours per format (MP4, vertical, NLE projects)</p>
            <p className={styles.cost}>⏱️ 1–2 hours | 💰 $60–$120</p>
            <p className={styles.presemble}>PRESEMBLE: All formats at once (MP4, vertical, Final Cut, Resolve, Premiere)</p>
            <p className={styles.savings}>⏱️ Save 1–2 hours | 💰 $50–$100</p>
          </div>

          <div className={styles.task}>
            <h4>Finding content across past projects</h4>
            <p className={styles.traditional}>Traditional: 30 mins–2 hours searching old files</p>
            <p className={styles.cost}>⏱️ 0.5–2 hours | 💰 $30–$120</p>
            <p className={styles.presemble}>PRESEMBLE: Instant FAISS index across all ingested projects</p>
            <p className={styles.savings}>⏱️ Save 0.5–2 hours | 💰 $30–$100</p>
          </div>

          <div className={styles.task}>
            <h4>Finding & placing b-roll on timeline</h4>
            <p className={styles.traditional}>Traditional: 2–4 hours manually searching & placing</p>
            <p className={styles.cost}>⏱️ 2–4 hours | 💰 $120–$240</p>
            <p className={styles.presemble}>PRESEMBLE: Hit refresh, auto-place b-roll by dialogue search</p>
            <p className={styles.savings}>⏱️ Save 2–4 hours | 💰 $110–$230</p>
          </div>
        </div>

        <div className={styles.totalSavings}>
          <h4>Per Project Total</h4>
          <p className={styles.bigNumber}>31–50 hours | $1,980–$4,250</p>
          <p><strong>$799 full price (one-time, no subscription).</strong> Your first job saves you $1,980–$4,250. It pays for the full software on day one.</p>
        </div>
      </section>

      <section className={styles.ctas}>
        <h3>Join the Waitlist</h3>
        <p>Sign up to get early access to PRESEMBLE when we launch.</p>
        <SignupForm />
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
