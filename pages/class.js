import { Component } from "react";
import { ThemeContext } from "./_app"

export default class ClassContextComponent extends Component {
  themeStyles (dark) {
    return {
      display: 'grid',
      placeItems: 'center',
      minHeight: '100vh',
      background: dark ? '#002' : '#fff',
      color: dark ? '#0fc' : '#002',
      transition: '.3s cubic-bezier(.68,.96,.56,.12)'
    }
  } 
  
  render() {
    return (
      <ThemeContext.Consumer>
        {
          darkTheme => {
            return (
              <div style={this.themeStyles(darkTheme)}>
                <div style={{ cursor: 'pointer'}}>
                  <h1>Learn Context</h1>
                </div>
              </div>
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }
}