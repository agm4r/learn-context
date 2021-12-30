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
    transition: '.9s',
    cursor: 'pointer'
  }

  return (
    <div onClick={toggleTheme} style={styles}>
      <h1>Learn Context</h1>
    </div>
  )
}
