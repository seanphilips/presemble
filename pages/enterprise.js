import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Enterprise.module.css'

export default function Enterprise() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/enterprise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', company: '', message: '' })
      }
    } catch (error) {
      console.error('Form error:', error)
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">← Back to home</Link>
        <h1>Enterprise Consultation</h1>
      </header>

      <section className={styles.content}>
        <div className={styles.pitch}>
          <h2>Buried treasure in your archive.</h2>
          <p>
            You have footage. Hundreds of hours, maybe thousands. Some of it's been sitting there for years. Untouched. Forgotten.
          </p>
          <p>
            There are stories in there. Moments that could change how people understand your mission. Clips that could reframe your narrative. Footage that's been waiting to be found.
          </p>
          <p>
            PRESEMBLE finds it. Not by scrolling through timecode. By understanding what's actually on screen.
          </p>
          <p>
            Imagine your entire archive searchable by meaning. By the stories that live inside it. Then imagine releasing them.
          </p>
          <p className={styles.cta}>
            Let's talk about what that looks like for your organization.
          </p>
        </div>

        {submitted ? (
          <div className={styles.success}>
            <h3>Thank you.</h3>
            <p>We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company">Company / Organization</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Tell us about your footage and what you'd like to do with it</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Schedule Consultation
            </button>
          </form>
        )}
      </section>
    </div>
  )
}
