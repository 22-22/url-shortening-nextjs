import { NextResponse } from 'next/server'

const externalApiUrl = 'https://cleanuri.com/api/v1/shorten'

export async function POST(request: Request) {
    const requestData = await request.json()
    try {
        const externalResponse = await fetch(externalApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        // const textResponse = await externalResponse.text(); // Get raw text for debugging
        const urlsData = await externalResponse.json()
        return NextResponse.json(urlsData)
    } catch (error) {
        console.error('Error forwarding request:', error)
        return NextResponse.json(
            { error: 'Failed to fetch data from the external API' },
            { status: 500 }
        )
    }
}
