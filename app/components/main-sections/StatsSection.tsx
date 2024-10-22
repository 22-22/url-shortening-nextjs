const StatsSection = () => {
    return (
        <section className="flex flex-col items-center bg-gray-200">
            <h2 className="mt-40 text-4xl font-extrabold text-indigo-950">
                Advanced Statistics
            </h2>
            <p className="mb-20 mt-4 max-w-sm text-center font-semibold text-gray-500">
                Track how your links are perfiorming across the web with our
                advanced statistics dashboard
            </p>
            <div className="grid grid-cols-3 gap-6 px-40">
                <article className="rounded-md bg-white px-5 py-10">
                    {/* <figure></figure> */}
                    <h3 className="mb-4 text-lg font-bold">
                        Brand recognition
                    </h3>
                    <p>
                        Boost your brand recognition with each click. Generic
                        links don’t mean a thing. Branded links help instil
                        confidence in your content.
                    </p>
                </article>
                <article className="rounded-md bg-white px-5 py-10">
                    <h3 className="mb-4 text-lg font-bold">Detailed Records</h3>
                    <p>
                        Gain insights into who is clicking your links. Knowing
                        when and where people engage with your content helps
                        inform better decisions.
                    </p>
                </article>
                <article className="rounded-md bg-white px-5 py-10">
                    <h3 className="mb-4 text-lg font-bold">
                        Fully Customizable
                    </h3>
                    <p>
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
