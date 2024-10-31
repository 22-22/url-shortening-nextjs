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
const UrlContext = createContext<IContext | null>(null)
const LocalStorageUrlsKey = 'urlsArray'

export const UrlProvider = ({ children }: UrlProviderProps) => {
    const [urlsData, setUrlsData] = useState<IUrls[]>(() => {
        const savedUrls = localStorage.getItem(LocalStorageUrlsKey)
        return savedUrls ? JSON.parse(savedUrls) : []
    })
    useEffect(() => {
        localStorage.setItem(LocalStorageUrlsKey, JSON.stringify(urlsData))
    }, [urlsData])

    const addUrl = (urlsObj: IUrls) => {
        setUrlsData((prevState) => [...prevState, urlsObj])
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
