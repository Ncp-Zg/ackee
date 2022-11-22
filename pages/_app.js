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
        domainId: '318f89b4-d620-4882-871e-ca048e3e8d28'
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
