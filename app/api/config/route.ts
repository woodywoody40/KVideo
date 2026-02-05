/**
 * Config API Route
 * Exposes configuration status (never actual values) to the client
 */

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const ACCESS_PASSWORD = process.env.ACCESS_PASSWORD || '';
const ACCESS_PASSWORD_2 = process.env.ACCESS_PASSWORD_2 || '';
const PERSIST_PASSWORD = process.env.PERSIST_PASSWORD !== 'false';
const SUBSCRIPTION_SOURCES = process.env.SUBSCRIPTION_SOURCES || process.env.NEXT_PUBLIC_SUBSCRIPTION_SOURCES || '';

export async function GET() {
    return NextResponse.json({
        hasEnvPassword: ACCESS_PASSWORD.length > 0 || ACCESS_PASSWORD_2.length > 0,
        persistPassword: PERSIST_PASSWORD,
        subscriptionSources: SUBSCRIPTION_SOURCES,
    });
}

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();

        if (!ACCESS_PASSWORD && !ACCESS_PASSWORD_2) {
            return NextResponse.json({ valid: false, message: 'No env password set' });
        }

        const valid = (ACCESS_PASSWORD && password === ACCESS_PASSWORD) ||
            (ACCESS_PASSWORD_2 && password === ACCESS_PASSWORD_2);
        return NextResponse.json({ valid });
    } catch {
        return NextResponse.json({ valid: false, message: 'Invalid request' }, { status: 400 });
    }
}
