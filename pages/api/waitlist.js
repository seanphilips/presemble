export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, projectsPerYear, nle } = req.body

  // Validate email
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  try {
    const timestamp = new Date().toISOString()
    
    return res.status(200).json({
      message: 'Successfully added to waitlist',
      isNew: true,
      email: email,
      timestamp: timestamp
    })
  } catch (error) {
    console.error('Waitlist error:', error)
    return res.status(500).json({ error: 'Failed to process request' })
  }
}
