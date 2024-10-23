import { FOOTER_LINKS } from './contents'

const LinksSection = () => {
    return (
        <section className="flex flex-col text-center sm:flex-row">
            {FOOTER_LINKS.map((linksGroup) => (
                <ul key={linksGroup.title} className="mt-10 sm:mr-28 sm:mt-0">
                    <h4 className="mb-4 font-extrabold">{linksGroup.title}</h4>
                    {linksGroup.links.map((link) => (
                        <li
                            key={link.name}
                            className="font-semibold hover:text-teal-500 [&:not(:last-child)]:mb-3"
                        >
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            ))}
        </section>
    )
}

export default LinksSection
