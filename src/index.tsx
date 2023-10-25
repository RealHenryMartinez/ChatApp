import {
  ComponentType,
  FunctionComponent,
  VNode,
  createContext,
  createElement,
  createRef,
  render,
} from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import { JSX } from "preact/jsx-runtime";
import React, { useContext, useState } from "preact/compat";
import TextChannel from "./pages/ChatRoom/TextChannel";
import './styles/default.style.css'

// interface Props {
//   children: React.ReactNode;
// }

// const UserName = createContext(null);

// const SubComponent: React.FC<Props> = ({ children }): JSX.Element => {
//   // Place in fragments
//   return <>{children}</>;
// };

// const User = () => {
//   const { name, setName } = useContext(UserName);
//   const func = React.useMemo(() => {
//     console.log("user");
//     setName("Username")
//   }, [name])
//   return (
//     <>
//       <button onClick={() => func}>SET NAME</button>
//       <p>Hello: {name}</p>
//     </>
//   );
// };

// const App = () => {
//   // create a ref:
//   const input = createRef();
//   const [name, setName] = useState("");

//   // const auth = () => {
// 	// console.log('NAME IS CHANGED')
//   //   return { name, setName };
//   // }

//   // the callback here will run after <App> is rendered:
//   React.useEffect(() => {
//     // access the associated DOM element:
//     input.current.focus(); // Keep consistent
//     console.log(input.current.focus());
//   }, []);

//   return (
//     <UserName.Provider value={{name, setName}}>
//       <button onClick={() => setName("Henry")}>Change Name</button>
//       <SubComponent children={[<p>Hello</p>, <b>{name}</b>]} />
//       <input ref={input} />
//       <div>
//         <p>
//           {/* <UserName.Consumer>
//             {(name) => (
//               // access the current name from context:
//               <span>{name}</span>
//             )}
//           </UserName.Consumer> */}
//         </p>
//       </div>

//       <User />
//     </UserName.Provider>
//   );
// };
const rootElement = document.getElementById("app");

// DON'T: Invoking components directly breaks hooks and update ordering:
// render(App(), rootElement); // ERROR
// render(App, rootElement); // ERROR

const App = () => {
  // const run = () => GetChat
  // run()
  return (
    <>
      <TextChannel />
    </>
  )
}

// DO: Passing components using createElement() or JSX allows Preact to render correctly:
// render(createElement(App, null), rootElement); // success
render(<App />, rootElement); // success
