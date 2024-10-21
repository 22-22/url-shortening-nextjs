import React from 'react'
import Logo from '../common/Logo'
import Navigation from './Navigation'
import LoginBtn from './LoginBtn'
import SignUpBtn from './SignUpBtn'

const Header = () => {
    return (
        <header className="flex items-center justify-between px-40 py-10 font-display">
            <div className="flex items-center gap-10">
                <Logo colour="indigo-950" />
                <Navigation />
            </div>
            <div>
                <LoginBtn />
                <SignUpBtn />
            </div>
        </header>
    )
}

export default Header
