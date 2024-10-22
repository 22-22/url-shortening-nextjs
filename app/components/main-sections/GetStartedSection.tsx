import Image from 'next/image'
import workingPerson from '../../../public/images/illustration-working.svg'

const GetStartedSection = () => {
    return (
        <section className="flex items-center justify-between px-40">
            <div>
                <h1 className="max-w-lg text-7xl font-bold text-indigo-950">
                    More than just shorter links
                </h1>
                <p className="mb-6 mt-4 max-w-sm font-semibold text-gray-500">
                    Build your brand&apos;s recognition and get detailed
                    insights on how your links are performing.
                </p>
                <button className="rounded-full bg-teal-500 px-6 py-3 text-xl font-semibold text-white">
                    Get started
                </button>
            </div>
            <div>
                <Image
                    src={workingPerson}
                    alt="a person working on the computer"
                />
            </div>
        </section>
    )
}

export default GetStartedSection
