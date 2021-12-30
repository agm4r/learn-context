import '../styles/globals.css'
import { createContext } from 'react'

export const myContext = createContext()
/*
  Every Context object comes with a Provider React component 
  that allows consuming components to subscribe to context changes.
*/

function MyApp({ Component, pageProps }) {
  return (
    <myContext.Provider value={{ name: 'Agmar' }}>
      {
        /*
          The Provider component 
          accepts a value prop to be passed to consuming 
          components that are descendants of this Provider

          One Provider can be connected to many consumers. 
          Providers can be nested to override values deeper within the tree.

          NOTE: To see how to use the current value, 
                you can move to branch feature/consumer 
                if you using function component 
                then move to page/index.js file. But if you using 
                class component you can move to branch feature/context-type
                then move to page/index.js file. 
        */
      }
      <Component {...pageProps} />
    </myContext.Provider>
  )
}

export default MyApp