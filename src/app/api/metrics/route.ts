import { NextResponse } from 'next/server';

// Simple metrics collection
const metrics = {
  pageViews: 0,
  apiCalls: 0,
  errors: 0,
  subscriptions: 0,
  startTime: Date.now(),
};

export async function GET() {
  const uptime = Date.now() - metrics.startTime;
  
  return NextResponse.json({
    metrics,
    uptime: Math.floor(uptime / 1000), // seconds
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, value = 1 } = body;

    switch (type) {
      case 'pageView':
        metrics.pageViews += value;
        break;
      case 'apiCall':
        metrics.apiCalls += value;
        break;
      case 'error':
        metrics.errors += value;
        break;
      case 'subscription':
        metrics.subscriptions += value;
        break;
      default:
        return NextResponse.json({ error: 'Invalid metric type' }, { status: 400 });
    }

    return NextResponse.json({ success: true, metrics });
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    );
  }
}