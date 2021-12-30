import '../styles/globals.css'
import { createContext } from 'react'

export const MyContext = createContext()
export const OtherContext = createContext()

MyContext.displayName = 'MyDisplayName'
OtherContext.displayName = 'OtherDisplayName'

console.log(MyContext)
console.log(OtherContext)

/*
Context object accepts a displayName string property. 
React DevTools uses this string to determine what to display for the context.

For example, the following component will appear as MyDisplayName in the DevTools:

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools

*/

function MyApp({ Component, pageProps }) {
  return (
    <MyContext.Provider value={{ name: 'Agmar' }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  )
}

export default MyApp