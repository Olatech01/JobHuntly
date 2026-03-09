import { NextResponse } from "next/server";



export async function POST(request) {
    const body = await request.json();
    const { email, password } = body;


    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (res.ok) {
            return NextResponse.json({ message: 'Login successful', token: data.token });
        } else {
            return NextResponse.json({ message: 'Login failed' }, { status: 401 });
        }
    } catch (error) {
        
    }
}