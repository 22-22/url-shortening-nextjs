'use client'
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react'

interface IUrls {
    originalUrl: string
    shortUrl: string
}
interface IContext {
    urlsData: IUrls[]
    addUrl: (urlsObj: IUrls) => void
}

interface UrlProviderProps {
    children: ReactNode
}
const UrlContext = createContext<IContext>({
    urlsData: [],
    addUrl: () => {},
})
const LocalStorageUrlsKey = 'urlsArray'

export const UrlProvider = ({ children }: UrlProviderProps) => {
    const [urlsData, setUrlsData] = useState<IUrls[]>([])

    useEffect(() => {
        const storedData = localStorage.getItem(LocalStorageUrlsKey)
        if (storedData) {
            setUrlsData(JSON.parse(storedData))
        }
    }, [])

    useEffect(() => {
        if (urlsData) {
            localStorage.setItem(LocalStorageUrlsKey, JSON.stringify(urlsData))
        }
    }, [urlsData])

    const addUrl = (urlsObj: IUrls) => {
        if (urlsData) {
            setUrlsData([...urlsData, urlsObj])
        }
    }

    return (
        <UrlContext.Provider value={{ urlsData, addUrl }}>
            {children}
        </UrlContext.Provider>
    )
}

export const useUrlContext = () => {
    const context = useContext(UrlContext)
    if (context === undefined) {
        throw new Error('usecontext should be within the provider')
    }
    return context
}
