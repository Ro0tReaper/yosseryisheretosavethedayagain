// pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <footer className="bg-primaryBlue text-center text-sm py-4 text-lightGray">
        © 2025 Mohammed yossery. All rights reserved.
      </footer>
    </>
  )
}
export default MyApp
