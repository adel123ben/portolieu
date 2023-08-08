import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div  className="transition-transform duration-500 delay-300 translate-y-0 opacity-100">
    <Component {...pageProps} />
  </div> 
}
