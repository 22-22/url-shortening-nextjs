const UrlFormSection = () => {
    return (
        <section className="relative -mb-24 px-10 sm:-mb-14 sm:px-40">
            <form
                className="flex flex-col items-center justify-center gap-4 rounded-md bg-indigo-950 bg-[url('/images/bg-shorten-desktop.svg')] bg-cover p-8 sm:flex-row"
                action=""
            >
                <input
                    className="w-full rounded-md px-8 py-3 font-semibold text-gray-400 sm:mr-4 sm:w-2/3"
                    type="text"
                    name=""
                    id=""
                    placeholder="Shorten a link here..."
                />
                <button
                    className="w-full rounded-md bg-teal-500 px-8 py-3 text-xl font-semibold text-white hover:bg-teal-300 sm:w-auto"
                    type="submit"
                >
                    Shorten it!
                </button>
            </form>
        </section>
    )
}

export default UrlFormSection
