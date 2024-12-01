'use client'
import { useState, useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useUrlContext } from '../Context'
import { shorten } from '@/app/api/actions'

const emptyInputError = 'Please add a link.'
const urlInputPlaceholder = 'Shorten a link here...'

interface FormInputs {
    url: string
}

const UrlFormSection = () => {
    const context = useUrlContext()
    const [requestError, setRequestError] = useState('')
    const [isPending, startTransition] = useTransition()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        clearErrors,
    } = useForm<FormInputs>()

    const onSubmitHandler: SubmitHandler<FormInputs> = ({ url }) => {
        startTransition(async () => {
            const result = await shorten(encodeURI(url))

            if (result.error) {
                setRequestError(result.error)
                return
            }
            const urlsToStore = {
                originalUrl: url,
                shortUrl: result.result_url as string,
            }

            context.addUrl(urlsToStore)
            reset()
            setRequestError('')
        })
    }

    const clearUrlErrors = () => {
        if (requestError || errors.url) {
            setRequestError('')
            clearErrors('url')
        }
    }
    return (
        <section className="relative -mb-24 px-10 sm:-mb-14 sm:px-40">
            <form
                className="rounded-md bg-indigo-950 bg-[url('/images/bg-shorten-desktop.svg')] bg-cover px-12 pb-4 pt-8"
                method="post"
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <input
                        className={`w-full rounded-md px-8 py-3 font-semibold text-gray-400 outline-none ${(errors.url || requestError) && 'outline-red-500'}`}
                        type="text"
                        {...register('url', { required: true })}
                        aria-invalid={errors.url ? 'true' : 'false'}
                        onChange={clearUrlErrors}
                        placeholder={urlInputPlaceholder}
                    />
                    <button
                        className="w-full rounded-md bg-teal-500 px-8 py-3 text-xl font-semibold text-white hover:bg-teal-300 sm:max-w-48"
                        type="submit"
                    >
                        {isPending ? 'Submitting...' : 'Shorten it!'}
                    </button>
                </div>
                <p className="text-sm font-semibold italic text-red-500">
                    {errors.url?.type === 'required'
                        ? emptyInputError
                        : requestError
                          ? requestError
                          : '\u00a0'}
                </p>
            </form>
        </section>
    )
}

export default UrlFormSection
