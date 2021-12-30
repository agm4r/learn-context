import ThemeProvider from '../src/ThemeContext'
import '../styles/globals.css'

/*
  NOTE: This is example of simple case using React Context,
        Check every branch for learn React Context from the beginning

        In index page is example of using React Context in function
        In class page is example of using React Context in class

  Road Map Branch:
  1. feature/create-context
  2. feature/provider
*/

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp


//Uncomment this to see Context in Class Component

// export const ThemeContext = createContext()

// function MyApp({ Component, pageProps }) {
//   const [darkTheme, setDarkTheme] = useState(true)
  
//   return (
//     <ThemeContext.Provider value={darkTheme}>
//       <button onClick={() => setDarkTheme(!darkTheme)}>Click</button>
//       <Component {...pageProps} />
//     </ThemeContext.Provider>
//   )
// }

// export default MyApp
