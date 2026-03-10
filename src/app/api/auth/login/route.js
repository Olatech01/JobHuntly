import { NextResponse } from "next/server";



export async function POST(request) {
    const payload = await request.json();

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        // console.log('Login response:', data);
        if (res.ok) {
            return NextResponse.json(data);
        } else {
            return NextResponse.json({ message: 'Login failed' }, { status: 401 });
        }
    } catch (error) {
        
    }
}