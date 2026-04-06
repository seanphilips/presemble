import { useState } from 'react'
import styles from '../styles/SignupForm.module.css'

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    projectsPerYear: '',
    nle: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setMessage('Added to waitlist. Check your email.')
      setFormData({
        email: '',
        projectsPerYear: '',
        nle: ''
      })
    } catch (err) {
      setError('Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <select
          name="projectsPerYear"
          value={formData.projectsPerYear}
          onChange={handleChange}
          disabled={loading}
          className={styles.select}
        >
          <option value="">How many projects per year?</option>
          <option value="1-5">1-5 projects</option>
          <option value="6-12">6-12 projects</option>
          <option value="13-25">13-25 projects</option>
          <option value="26-50">26-50 projects</option>
          <option value="50plus">50 plus projects</option>
        </select>
      </div>

      <div className={styles.field}>
        <select
          name="nle"
          value={formData.nle}
          onChange={handleChange}
          disabled={loading}
          className={styles.select}
        >
          <option value="">Which NLE do you use?</option>
          <option value="premiere">Adobe Premiere Pro</option>
          <option value="davinci">DaVinci Resolve</option>
          <option value="finalcut">Final Cut Pro</option>
          <option value="avid">Avid Media Composer</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button type="submit" disabled={loading} className={styles.button}>
        {loading ? 'Adding to Waitlist...' : 'Join Waitlist'}
      </button>

      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </form>
  )
}
