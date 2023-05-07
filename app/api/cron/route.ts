import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_PATH}/cleanup`,
      {
        method: 'POST',
        headers: { 'X-Auth': process.env.CRON_SECRET || '' },
      }
    );
    const data: { success: boolean } = await response.json();

    if (data.success) {
      return NextResponse.json(data);
    }
    NextResponse.json({ error: 'error while running cron' });
  } catch (err: any) {
    NextResponse.json({ error: err.message });
  }
}
