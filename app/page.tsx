'use client'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from './components/headers-sections/Header'
import GetStartedSection from './components/main-sections/GetStartedSection'
import UrlFormSection from './components/main-sections/UrlFormSection'
import StatsSection from './components/main-sections/StatsSection'
import BoostSection from './components/main-sections/BoostSection'
import Footer from './components/footer-sections/Footer'
import DisplayUrl from './components/main-sections/DisplayUrl'

export default function Home() {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Header />
                <main>
                    <GetStartedSection />
                    <UrlFormSection />
                    <DisplayUrl />
                    <StatsSection />
                    <BoostSection />
                </main>
                <Footer />
            </div>
        </QueryClientProvider>
    )
}
