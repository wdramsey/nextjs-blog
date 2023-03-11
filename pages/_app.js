import '../styles/globals.css';
import React, {useEffect, useRef} from 'react';

function MyApp({ Component, pageProps }) {
  let count = useRef(0);
  useEffect(() => {
    
  //   count.current = count.current + 1;
    const entries = performance.getEntriesByType("navigation");
    entries.forEach((entry) => {
      console.log(entry.type);
    });
  //   console.log(count);
  });  
  return (
  <Component {...pageProps} />
  );
}

export default MyApp
