import Image from 'next/image'
import workingPerson from '../../../public/images/illustration-working.svg'
import GetStartedBtn from '../common/GetStartedBtn'

const GetStartedSection = () => {
    return (
        <section className="flex flex-col-reverse items-center gap-4 px-10 pb-10 text-center sm:flex-row sm:px-40 sm:text-start">
            <div>
                <h1 className="max-w-lg text-5xl font-bold text-indigo-950 sm:text-7xl">
                    More than just shorter links
                </h1>
                <p className="mb-6 mt-4 max-w-sm font-semibold text-gray-400">
                    Build your brand&apos;s recognition and get detailed
                    insights on how your links are performing.
                </p>
                <GetStartedBtn />
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
