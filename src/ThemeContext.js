import { useState, createContext, useContext } from 'react'

const ThemeContext = createContext()
const ThemeContextUpdate = createContext()

export const useTheme = () => useContext(ThemeContext)
export const useThemeUpdate = () => useContext(ThemeContextUpdate)

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => setDarkTheme(!darkTheme)
  
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeContextUpdate.Provider value={toggleTheme}>
        { children }
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
}
 
export default ThemeProvider;