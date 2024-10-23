import Logo from '../common/Logo'
import IconsSection from './IconsSection'
import LinksSection from './LinksSection'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-between bg-gray-900 px-10 py-16 text-white sm:flex-row sm:items-start sm:px-40">
            <h2 className="sr-only">Footer</h2>
            <Logo colour="white" />
            <div className="flex flex-col sm:flex-row">
                <LinksSection />
                <IconsSection />
            </div>
        </footer>
    )
}

export default Footer
