import '../styles/globals.css'
import { createContext } from 'react'

export const MyContext = createContext()

function MyApp({ Component, pageProps }) {
  return (
    <MyContext.Provider value={{ name: 'Agmar' }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  )
}

export default MyApp