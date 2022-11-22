import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAckee as ackee}  from 'use-ackee'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ackee(url, {
        server: 'https://serene-sfogliatella-92f81b.netlify.app',
        domainId: '542396e4-8a6a-498c-a94e-64365dd13382'
      }, {
        detailed: false,
        ignoreLocalhost: true,
        ignoreOwnVisits: false
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
