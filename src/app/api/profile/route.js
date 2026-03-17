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

        if (!token) {
            return NextResponse.json(
                { success: false, error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Make request to your backend
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { success: false, error: data.error || "Failed to fetch profile" },
                { status: response.status }
            );
        }

        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        console.error('Error fetching company profile:', error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}