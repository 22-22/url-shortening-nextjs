import Header from './components/headers-sections/Header'
import GetStartedSection from './components/main-sections/GetStartedSection'
import UrlFormSection from './components/main-sections/UrlFormSection'
import StatsSection from './components/main-sections/StatsSection'
import BoostSection from './components/main-sections/BoostSection'
import Footer from './components/footer-sections/Footer'

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <GetStartedSection />
                <UrlFormSection />
                <StatsSection />
                <BoostSection />
            </main>
            <Footer />
        </div>
    )
}
