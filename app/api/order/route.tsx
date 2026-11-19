import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const webhookUrl = process.env.NEXT_PUBLIC_ORDER_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { success: false, message: 'Webhook URL not configured' },
        { status: 500 }
      );
    }

    const n8nResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const text = await n8nResponse.text();
    let data: Record<string, unknown> = {};
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    if (!n8nResponse.ok) {
      return NextResponse.json(
        { success: false, message: 'n8n webhook error', details: data },
        { status: n8nResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      orderId: data.orderId || `DB-${Math.floor(1000 + Math.random() * 9000)}`,
      ...data,
    });
  } catch (error) {
    console.error('Order API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to connect to order server' },
      { status: 500 }
    );
  }
}