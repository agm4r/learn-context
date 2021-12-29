import ThemeProvider from '../src/ThemeContext'
import '../styles/globals.css'


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
