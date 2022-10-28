import '../styles/globals.css';
import { useState, createContext } from 'react';

export const CountContext = createContext();
export const SetCountContext = createContext(); 

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0); // declare high-level "count" state
  return (
    <>
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
        <Component {...pageProps} count={count} setCount={setCount} />
      </SetCountContext.Provider>
    </CountContext.Provider>
    </>
  ); // pass it as props to the page components
}

export default MyApp;