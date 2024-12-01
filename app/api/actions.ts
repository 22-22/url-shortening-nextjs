'use server'

const externalApiUrl = 'https://cleanuri.com/api/v1/shorten'

export async function shorten(url: string) {
    try {
        const externalResponse = await fetch(externalApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        })
        if (!externalResponse.ok) {
            throw new Error()
        }
        const urlsData = await externalResponse.json()
        return urlsData
    } catch (error) {
        console.error('Error forwarding request:', error)
        return { error: 'Failed to fetch data from the external API' }
    }
}
