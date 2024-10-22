const UrlFormSection = () => {
    return (
        <section className="relative -mb-16 px-40">
            <form
                className="flex justify-center rounded-md bg-indigo-950 bg-[url('/images/bg-shorten-desktop.svg')] bg-cover py-10"
                action=""
            >
                <input
                    className="mr-4 w-2/3 rounded-md px-8 py-3 text-gray-500"
                    type="text"
                    name=""
                    id=""
                    placeholder="Shorten a link here..."
                />
                <button
                    className="rounded-md bg-teal-500 px-8 py-3 text-xl font-semibold text-white"
                    type="submit"
                >
                    Shorten it!
                </button>
            </form>
        </section>
    )
}

export default UrlFormSection
