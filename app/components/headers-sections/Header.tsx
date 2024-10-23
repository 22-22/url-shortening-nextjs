import React from 'react'
import Logo from '../common/Logo'
import Navigation from './Navigation'
import LoginBtn from './LoginBtn'
import SignUpBtn from './SignUpBtn'
import BurgerMenuMobile from './BurgerMenuMobile'

const Header = () => {
    return (
        <header className="flex items-center justify-between px-10 py-10 font-display sm:px-40">
            <h2 className="sr-only">Header</h2>
            <div className="flex items-center gap-10">
                <Logo colour="indigo-950" />
                <Navigation />
            </div>
            <div className="hidden sm:block">
                <LoginBtn />
                <SignUpBtn />
            </div>
            <BurgerMenuMobile />
        </header>
    )
}

export default Header
