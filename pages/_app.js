import '../styles/globals.css'
import { createContext } from 'react'

export const MyContext = createContext({ name: 'Agmar Putra' })

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp