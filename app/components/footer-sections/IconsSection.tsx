import Image from 'next/image'
import facebookIcon from '../../../public/images/icon-facebook.svg'
import twitterIcon from '../../../public/images/icon-twitter.svg'
import pinterestIcon from '../../../public/images/icon-pinterest.svg'
import instagramIcon from '../../../public/images/icon-instagram.svg'

const IconsSection = () => {
    return (
        <section className="mt-10 sm:mt-0">
            <ul className="flex items-center gap-4">
                <li>
                    <a href="">
                        <Image src={facebookIcon} alt="facebook icon" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Image src={twitterIcon} alt="twitter icon" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Image src={pinterestIcon} alt="pinterest icon" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Image src={instagramIcon} alt="instagram icon" />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default IconsSection
