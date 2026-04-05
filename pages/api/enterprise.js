export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, company, message } = req.body

    // Send email via a service (for now, just log it)
    // In production, use SendGrid, Mailgun, or similar
    console.log('Enterprise consultation request:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
    })

    // For MVP, just return success
    // TODO: Implement actual email sending
    res.status(200).json({ success: true, message: 'Consultation request received' })
  } catch (error) {
    console.error('Enterprise error:', error)
    res.status(500).json({ error: error.message })
  }
}
