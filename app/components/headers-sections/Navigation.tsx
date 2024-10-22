import { MENU } from './contents'

const Navigation = () => {
    return (
        <nav>
            <ul className="flex gap-4">
                {MENU.map(({ name }) => (
                    <li
                        key={name}
                        className="px-4 py-2 font-semibold text-gray-500"
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation
