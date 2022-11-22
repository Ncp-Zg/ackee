import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAckee } from 'use-ackee'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      useAckee(url, {
        server: 'https://your.app',
        domainId: 'your-domain-id'
      }, {
        detailed: false,
        ignoreLocalhost: true,
        ignoreOwnVisits: true
      })      
    }
      router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <Component {...pageProps} />
}

export default MyApp
