import '../styles/globals.css'
import { createContext } from 'react'

const myContext = createContext()
// Above is example how to using create Context
/*
  When React renders a component that subscribes to this Context object 
  it will read the current context value from the closest 
  matching "Provider" above it in the tree.
*/
// You can Also set the default value like this " const myContext = createContext(defaultValue) "

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp