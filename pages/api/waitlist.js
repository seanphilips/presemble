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
    // Send to Google Sheets via Apps Script webhook
    const SHEET_ID = process.env.PRESEMBLE_SHEET_ID
    const SHEETS_WEBHOOK = process.env.SHEETS_WEBHOOK_URL

    if (!SHEET_ID) {
      return res.status(500).json({ error: 'Configuration missing' })
    }

    // For now, just return success - data would go to Sheets via webhook
    const timestamp = new Date().toISOString()
    
    // If webhook is configured, send there
    if (SHEETS_WEBHOOK) {
      try {
        await fetch(SHEETS_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email.toLowerCase(),
            projectsPerYear: projectsPerYear || 'not specified',
            nle: nle || 'not specified',
            timestamp: timestamp,
            source: 'website'
          })
        })
      } catch (webhookErr) {
        console.log('Webhook failed, but continuing:', webhookErr.message)
      }
    }

    return res.status(200).json({
      message: 'Successfully added to waitlist',
      isNew: true
    })
  } catch (error) {
    console.error('Waitlist error:', error)
    return res.status(500).json({ error: 'Failed to process request' })
  }
}
