import Header from './components/headers-sections/Header'
import GetStartedSection from './components/main-sections/GetStartedSection'
import UrlFormSection from './components/main-sections/UrlFormSection'
import StatsSection from './components/main-sections/StatsSection'
import BoostSection from './components/main-sections/BoostSection'
import Footer from './components/footer-sections/Footer'
import DisplayUrl from './components/main-sections/DisplayUrl'
import { UrlProvider } from './components/Context'

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <GetStartedSection />
                <UrlProvider>
                    <UrlFormSection />
                    <DisplayUrl />
                </UrlProvider>
                <StatsSection />
                <BoostSection />
            </main>
            <Footer />
        </div>
    )
}
