import { NextResponse } from "next/server";

export async function POST(request) {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({
            message: 'Authorization token is required'
        }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    try {
        const body = await request.json();

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/postJob`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });

        const data = await res.json();

        if (res.ok) {
            return NextResponse.json(data, { status: 201 });
        } else {
            return NextResponse.json({
                message: data.message || 'Failed to post job'
            }, { status: res.status });
        }
    } catch (error) {
        console.error('Error in post job API:', error);
        return NextResponse.json({
            message: 'Internal server error'
        }, { status: 500 });
    }
}