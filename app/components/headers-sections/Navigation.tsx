import { Menu } from './contents'

const Navigation = () => {
    return (
        <nav>
            <ul className="flex gap-8">
                {Menu.map(({ name }) => (
                    <li key={name} className="font-semibold text-gray-500">
                        {name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation
