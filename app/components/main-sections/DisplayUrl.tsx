'use client'
import { useState } from 'react'
import { useUrlContext } from '../Context'

const DisplayUrl = () => {
    const context = useUrlContext()
    const [copiedUrls, setCopiedUrls] = useState<number[]>([])
    const copyText = (evt: React.MouseEvent, idx: number) => {
        const button = evt.target as HTMLButtonElement
        navigator.clipboard.writeText(button.value)
        setCopiedUrls([...copiedUrls, idx])
    }
    const checkIfCopied = (idx: number) => {
        return copiedUrls.includes(idx)
    }
    return (
        <section className="bg-gray-200">
            {context?.urlsData && (
                <ul className="px-10 pt-28 sm:px-40 sm:pt-16">
                    {context.urlsData.map((urls, idx) => (
                        <li
                            key={idx}
                            className="mt-3 text-wrap rounded-md bg-white px-10 py-3 sm:flex sm:items-center sm:justify-between"
                        >
                            <span className="font-semibold text-gray-800">
                                {urls.originalUrl}
                            </span>
                            <div>
                                <span className="font-semibold text-teal-500 sm:mr-5">
                                    {urls.shortUrl}
                                </span>
                                <button
                                    className={`mt-3 rounded-md px-6 py-2 font-semibold text-white sm:mt-0 ${checkIfCopied(idx) ? 'bg-gray-800' : 'bg-teal-500'} ${checkIfCopied(idx) ? 'hover:bg-gray-800' : 'hover:bg-teal-300'}`}
                                    value={urls.shortUrl}
                                    onClick={(evt) => copyText(evt, idx)}
                                >
                                    {checkIfCopied(idx) ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default DisplayUrl
