import React from "react";
import { MyContext } from "./_app"

class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;

    /* ... */
  }
  render() {
    let value = this.context;

    return <div><h1>{ JSON.stringify(value) }</h1></div>
  }
}

MyClass.contextType = MyContext;
export default MyClass

/*
  The contextType property on a class can be assigned a Context object created by React.createContext(). 
  Using this property lets you consume the nearest current value of that Context type using this.context. 
  You can reference this in any of the lifecycle methods including the render function.
*/

/* 
  NOTE:
  1. You can only subscribe to a single context using this API. 
  2. If you are using the experimental public class fields syntax, 
      you can use a static class field to initialize your contextType.
*/

// Uncomment code down below to see the example of using the experimental public class fields syntax

// class MyClass extends React.Component {
//   static contextType = MyContext;
//   render() {
//     let value = this.context;
//     return <div><h1>{ JSON.stringify(value) }</h1></div>
//   }
// }

// export default MyClass