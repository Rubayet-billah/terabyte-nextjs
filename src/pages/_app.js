import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
