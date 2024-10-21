interface LogoProps {
    colour: string
}

const Logo: React.FC<LogoProps> = ({ colour }) => {
    return (
        <div className={`text-4xl font-extrabold capitalize text-${colour}`}>
            shortly
        </div>
    )
}

export default Logo
