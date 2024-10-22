import Header from './components/headers-sections/Header'
import GetStartedSection from './components/main-sections/GetStartedSection'
import StatsSection from './components/main-sections/StatsSection'
import UrlFormSection from './components/main-sections/UrlFormSection'

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <GetStartedSection />
                <UrlFormSection />
                <StatsSection />
            </main>
            <footer></footer>
        </div>
    )
}
