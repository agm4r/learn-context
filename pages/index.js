import { useTheme, useThemeUpdate } from "../src/ThemeContext"

export default function Home() {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const styles = {
    display: 'grid',
    placeItems: 'center',
    minHeight: '100vh',
    background: darkTheme ? '#002' : '#fff',
    color: darkTheme ? '#0fc' : '#002',
    transition: '.3s cubic-bezier(.68,.96,.56,.12)'
  }
  
  return (
    <div style={styles}>
      <h1 onClick={toggleTheme}>Learn Context</h1>
    </div>
  )
}
