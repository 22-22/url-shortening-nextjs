'use client'
import { FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
    emptyInputError,
    localStorageUrlsKey,
    urlsMutationKey,
} from './constants'
import { IUrls } from '@/app/types'

const UrlFormSection = () => {
    const queryClient = useQueryClient()
    const [url, setUrl] = useState('')
    const [error, setError] = useState('')

    const submitForm = async (url: string) => {
        const response = await fetch('api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: encodeURI(url) }),
        })
        return await response.json()
    }
    const { isPending, mutate } = useMutation({
        mutationKey: [urlsMutationKey],
        mutationFn: submitForm,
        onError: (error) => {
            setError(error.message)
        },
        onSuccess: (data) => {
            const urlsToStore = {
                originalUrl: url,
                shortUrl: data.result_url,
            }
            queryClient.setQueryData([urlsMutationKey], (prevData: IUrls[]) => {
                const existingData = Array.isArray(prevData) ? prevData : []
                const newData = [...existingData, urlsToStore]
                localStorage.setItem(
                    localStorageUrlsKey,
                    JSON.stringify(newData)
                )
                return newData
            })
            setUrl('')
        },
    })

    const handleInputChange = (url: string) => {
        setError('')
        setUrl(url)
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!url.trim()) {
            setError(emptyInputError)
            return
        }

        await mutate(url)
    }

    return (
        <section className="relative -mb-24 px-10 sm:-mb-14 sm:px-40">
            <form
                className="rounded-md bg-indigo-950 bg-[url('/images/bg-shorten-desktop.svg')] bg-cover px-12 py-8"
                method="post"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <input
                        className={`w-full rounded-md px-8 py-3 font-semibold text-gray-400 outline-none ${error && 'outline-red-500'}`}
                        type="text"
                        name="url"
                        value={url}
                        onChange={(evt) => handleInputChange(evt.target.value)}
                        placeholder="Shorten a link here..."
                    />
                    <button
                        className="w-full rounded-md bg-teal-500 px-8 py-3 text-xl font-semibold text-white hover:bg-teal-300 sm:max-w-48"
                        type="submit"
                    >
                        {isPending ? 'Submitting...' : 'Shorten it!'}
                    </button>
                </div>
                {error && (
                    <p className="text-sm font-semibold italic text-red-500">
                        {error}
                    </p>
                )}
            </form>
        </section>
    )
}

export default UrlFormSection
