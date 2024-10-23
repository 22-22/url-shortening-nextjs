import Image from 'next/image'
import brandRecognitionIcon from '../../../public/images/icon-brand-recognition.svg'
import detailedRecordsIcon from '../../../public/images/icon-detailed-records.svg'
import fullyCustomIcon from '../../../public/images/icon-fully-customizable.svg'

const StatsSection = () => {
    return (
        <section className="flex flex-col items-center bg-gray-200 px-10 py-20 sm:px-40">
            <h2 className="mt-16 text-4xl font-extrabold text-indigo-950">
                Advanced Statistics
            </h2>
            <p className="mt-4 max-w-sm text-center font-semibold text-gray-500">
                Track how your links are perfiorming across the web with our
                advanced statistics dashboard
            </p>
            <div className="mt-20 flex flex-col items-center justify-center sm:mt-0 sm:flex-row">
                <article className="flex flex-col items-center rounded-md bg-white px-10 pb-10 sm:block">
                    <div className="relative -mt-10 mb-5 h-20 w-20 rounded-full bg-indigo-950">
                        <Image
                            className="absolute left-5 top-5"
                            src={brandRecognitionIcon}
                            alt="brand recognition icon"
                        />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-indigo-950">
                        Brand recognition
                    </h3>
                    <p className="font-semibold text-gray-500">
                        Boost your brand recognition with each click. Generic
                        links don’t mean a thing. Branded links help instil
                        confidence in your content.
                    </p>
                </article>
                <p className="h-24 border-4 border-teal-500 sm:h-auto sm:w-24"></p>
                <article className="flex flex-col items-center rounded-md bg-white px-10 pb-10 sm:mt-20 sm:block">
                    <div className="relative -mt-10 mb-5 h-20 w-20 rounded-full bg-indigo-950">
                        <Image
                            className="absolute left-5 top-5"
                            src={detailedRecordsIcon}
                            alt="detailed records icon"
                        />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-indigo-950">
                        Detailed Records
                    </h3>
                    <p className="font-semibold text-gray-500">
                        Gain insights into who is clicking your links. Knowing
                        when and where people engage with your content helps
                        inform better decisions.
                    </p>
                </article>
                {/* <p className="w-24 border-4 border-teal-500"></p> */}
                <p className="h-24 border-4 border-teal-500 sm:h-auto sm:w-24"></p>
                <article className="flex flex-col items-center rounded-md bg-white px-10 pb-10 sm:mt-40 sm:block">
                    <div className="relative -mt-10 mb-5 h-20 w-20 rounded-full bg-indigo-950">
                        <Image
                            className="absolute left-4 top-4"
                            src={fullyCustomIcon}
                            alt="fully customizable icon"
                        />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-indigo-950">
                        Fully Customizable
                    </h3>
                    <p className="font-semibold text-gray-500">
                        Improve brand awareness and content discoverability
                        through customizable links, supercharging audience
                        engagement.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default StatsSection
