import { MyContext } from "./_app"

export default function Home() {
  return (
    <MyContext.Consumer>
      {
        value => <div><h1>{ JSON.stringify(value) }</h1></div>
      }
    </MyContext.Consumer>
  );
}

/*
  A React component that subscribes to context changes. 
  Using this component lets you subscribe to a context within a function component.

  Requires a function as a child. The function receives 
  the current context value and returns a React node. 
  The value argument passed to the function will be equal to the value prop 
  of the closest Provider for this context above in the tree. If there 
  is no Provider for this context above, the value argument will be equal 
  to the defaultValue that was passed to createContext().
*/