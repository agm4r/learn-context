import '../styles/globals.css'
import { createContext } from 'react'

const myContext = createContext()

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp