import { NextResponse } from "next/server";

export async function POST(request) {
    let payload;

    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (res.ok) {
            return NextResponse.json(data);
        } else {
            return NextResponse.json(
                { message: data?.message || 'Login failed' },
                { status: res.status }
            );
        }
    } catch (error) {
        console.error('Login proxy error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}