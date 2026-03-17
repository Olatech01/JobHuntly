import { NextResponse } from "next/server";



export async function GET(request) {

    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({
            message: 'Authorization token is required'
        }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];


    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/applications`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const data = await res.json();

        if (res.ok) {
            return NextResponse.json(data, { status: 200 });
        } else {
            return NextResponse.json({
                message: data.message || 'Failed to fetch jobs'
            }, { status: res.status });
        }
    } catch (error) {
        console.error('Error in fetch jobs API:', error);
        return NextResponse.json({
            message: 'Internal server error'
        }, { status: 500 });
    }

}