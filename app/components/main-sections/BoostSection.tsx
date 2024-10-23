import GetStartedBtn from '../common/GetStartedBtn'

const BoostSection = () => {
    return (
        <section className="flex flex-col items-center bg-indigo-950 bg-[url('/images/bg-boost-desktop.svg')] bg-cover py-16">
            <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl">
                Boost your links today
            </h2>
            <GetStartedBtn />
        </section>
    )
}

export default BoostSection
