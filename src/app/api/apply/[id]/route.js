import { NextResponse } from "next/server";

export async function POST(request, { params }) {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({
            message: 'Authorization token is required'
        }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const { id } = await params;

    try {
        // Get the form data (includes file + text fields)
        const formData = await request.formData();

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/applyJob/${id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        });

        const data = await res.json();

        if (res.ok) {
            return NextResponse.json(data, { status: 201 });
        } else {
            return NextResponse.json({
                message: data.message || 'Failed to submit application'
            }, { status: res.status });
        }
    } catch (error) {
        console.error('Error in apply API:', error);
        return NextResponse.json({
            message: 'Internal server error'
        }, { status: 500 });
    }
}