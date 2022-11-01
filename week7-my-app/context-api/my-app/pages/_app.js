import '../styles/globals.css'
import React, {useState} from 'react';

export const CountContext = React.createContext();
export const SetCountContext = React.createContext();

function MyApp({ Component, pageProps }) {

  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
        <Component {...pageProps} />
      </SetCountContext.Provider>
    </CountContext.Provider>
  );
  
  
  
}

export default MyApp
