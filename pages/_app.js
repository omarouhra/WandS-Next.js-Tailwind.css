import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      once: true
    })
  },[])
  return <Component {...pageProps} />;
}

export default MyApp;
