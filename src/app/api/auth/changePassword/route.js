import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const payload = await request.json();
        const authHeader = request.headers.get('Authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({
                message: 'Authorization token is required'
            }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];

        // Validate payload
        if (!payload.email || !payload.oldPassword || !payload.newPassword) {
            return NextResponse.json({
                message: 'All fields are required'
            }, { status: 400 });
        }

        if (payload.newPassword.length < 8) {
            return NextResponse.json({
                message: 'New password must be at least 8 characters'
            }, { status: 400 });
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/change-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Send token as Bearer token
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (res.ok) {
            return NextResponse.json(data, { status: 200 });
        } else {
            return NextResponse.json({
                message: data.message || 'Password change failed'
            }, { status: res.status });
        }
    } catch (error) {
        console.error('Error in change password API:', error);
        return NextResponse.json({
            message: 'Internal server error'
        }, { status: 500 });
    }
}