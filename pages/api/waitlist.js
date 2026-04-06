import fs from 'fs'
import path from 'path'

const waitlistFile = path.join(process.cwd(), 'data', 'waitlist.json')
const backupFile = path.join(process.cwd(), 'data', 'waitlist_backup.json')

// Ensure data directory exists
const dataDir = path.dirname(waitlistFile)
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Initialize files if they don't exist
if (!fs.existsSync(waitlistFile)) {
  fs.writeFileSync(waitlistFile, JSON.stringify([], null, 2))
}
if (!fs.existsSync(backupFile)) {
  fs.writeFileSync(backupFile, JSON.stringify([], null, 2))
}

// Add row to Google Sheet via Sheets API
async function addToGoogleSheet(email, projectsPerYear, nle) {
  const SHEET_ID = process.env.PRESEMBLE_SHEET_ID

  if (!SHEET_ID) {
    console.log('No SHEET_ID configured, skipping Google Sheets')
    return { success: false, reason: 'no_sheet_id' }
  }

  try {
    // Use fetch to call Sheets API directly
    const timestamp = new Date().toISOString()
    const values = [[email, projectsPerYear || 'not specified', nle || 'not specified', timestamp, 'website']]

    // This would need auth token - for now, return false to use backup
    console.log(`Would add ${email} to Sheet ${SHEET_ID}`)
    return { success: false, reason: 'auth_not_configured' }
  } catch (error) {
    console.error('Google Sheets error:', error.message)
    return { success: false, reason: 'sheets_error', error: error.message }
  }
}

// Save to local backup file
function addToBackup(email, projectsPerYear, nle) {
  try {
    const data = fs.readFileSync(backupFile, 'utf8')
    let backup = JSON.parse(data)

    // Check if already exists
    if (backup.some(entry => entry.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, reason: 'duplicate', isDuplicate: true }
    }

    const entry = {
      email: email.toLowerCase(),
      projectsPerYear: projectsPerYear || 'not specified',
      nle: nle || 'not specified',
      timestamp: new Date().toISOString(),
      source: 'website',
      synced: false
    }

    backup.push(entry)
    fs.writeFileSync(backupFile, JSON.stringify(backup, null, 2))
    return { success: true }
  } catch (error) {
    console.error('Backup save error:', error)
    return { success: false, error: error.message }
  }
}

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
    // Check if email already exists
    const backupData = fs.readFileSync(backupFile, 'utf8')
    let backup = JSON.parse(backupData)

    if (backup.some(entry => entry.email.toLowerCase() === email.toLowerCase())) {
      return res.status(200).json({ 
        message: 'Email already on waitlist',
        isNew: false 
      })
    }

    // Try Google Sheets first (will fail without auth, but that's ok)
    const sheetsResult = await addToGoogleSheet(email, projectsPerYear, nle)

    // Save to backup
    const backupResult = addToBackup(email, projectsPerYear, nle)
    
    if (backupResult.success) {
      return res.status(200).json({
        message: 'Successfully added to waitlist',
        isNew: true,
        synced: sheetsResult.success ? true : false
      })
    } else if (backupResult.isDuplicate) {
      return res.status(200).json({
        message: 'Email already on waitlist',
        isNew: false
      })
    } else {
      return res.status(500).json({
        error: 'Failed to save signup',
        detail: backupResult.error
      })
    }
  } catch (error) {
    console.error('Waitlist error:', error)
    return res.status(500).json({ error: 'Failed to process request' })
  }
}
