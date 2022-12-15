import "../styles/globals.css";
import "../styles/Login.css";
import "../styles/Footer.css";
import "../styles/Slider.css";
import "../styles/productStyling.css";
import "../styles/ProductDetails.css";
import "../styles/Nav.css";
import "../styles/cardstyle.css";
import "../styles/aside.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
