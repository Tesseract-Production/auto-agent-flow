import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase-server'

export async function GET() {
  try {
    // Get recent subscribers for social proof
    const { data, error } = await supabaseServer
      .rpc('get_recent_subscribers', { limit_count: 10 })
    
    if (error) {
      console.error('Error fetching social proof data:', error)
      return NextResponse.json(
        { error: 'Failed to fetch social proof data' },
        { status: 500 }
      )
    }

    // Get total count of subscribers
    const { count: totalCount } = await supabaseServer
      .from('landing_subscribers')
      .select('*', { count: 'exact', head: true })

    // Transform data for social proof messages
    const socialProofItems = data.map((subscriber: { first_name: string; created_at: string; source: string }, index: number) => {
      const timeAgo = getTimeAgo(new Date(subscriber.created_at))
      
      // Different actions based on source
      let action = 'just joined the masterclass'
      switch (subscriber.source) {
        case 'hero':
          action = 'just enrolled for early access'
          break
        case 'pricing':
          action = 'just purchased the full course'
          break
        case 'ebook-download':
          action = 'downloaded the implementation guide'
          break
        default:
          action = 'just joined the automation community'
      }

      return {
        id: index + 1,
        name: `${subscriber.first_name} ${getRandomLastInitial()}.`,
        location: getRandomLocation(),
        action,
        timeAgo
      }
    })

    return NextResponse.json(
      { 
        socialProofItems,
        totalSignups: totalCount || 2847 // Fallback to base count
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper functions
function getTimeAgo(date: Date): string {
  const now = new Date()
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
  
  if (diffInMinutes < 1) {
    return 'just now'
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`
  } else if (diffInMinutes < 1440) {
    const hours = Math.floor(diffInMinutes / 60)
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  } else {
    const days = Math.floor(diffInMinutes / 1440)
    return `${days} day${days > 1 ? 's' : ''} ago`
  }
}

function getRandomLastInitial(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return letters[Math.floor(Math.random() * letters.length)]
}

function getRandomLocation(): string {
  const locations = [
    'San Francisco', 'London', 'Toronto', 'Sydney', 'Madrid', 'New York',
    'Berlin', 'Vancouver', 'Amsterdam', 'Tokyo', 'Paris', 'Austin',
    'Seattle', 'Chicago', 'Boston', 'Miami', 'Denver', 'Portland'
  ]
  return locations[Math.floor(Math.random() * locations.length)]
}

