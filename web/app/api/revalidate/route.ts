import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Secret token to prevent unauthorized revalidation
const REVALIDATE_TOKEN = process.env.REVALIDATE_TOKEN || 'bladeboard-refresh-2026'

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')

  // Validate token
  if (token !== REVALIDATE_TOKEN) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  try {
    // Revalidate the home page (which fetches leaderboard data)
    revalidatePath('/')
    
    return NextResponse.json({ 
      revalidated: true, 
      timestamp: new Date().toISOString() 
    })
  } catch (error) {
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'Use POST to trigger revalidation',
    usage: 'POST /api/revalidate?token=YOUR_TOKEN'
  })
}
