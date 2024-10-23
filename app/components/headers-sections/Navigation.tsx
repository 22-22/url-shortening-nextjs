import { MENU } from './contents'

const Navigation = () => {
    return (
        <nav className="hidden sm:block">
            <ul className="flex gap-4">
                {MENU.map(({ name, href }) => (
                    <li
                        key={name}
                        className="px-4 py-2 font-semibold text-gray-400 hover:text-gray-800"
                    >
                        <a href={href}>{name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation
