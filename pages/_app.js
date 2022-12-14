import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

const colors = {
  brand: {
    500: "#CB5FFE"
  },
}

function MyApp({ Component, pageProps }) {
  return
  <ChakraProvider theme={extendTheme(colors)}>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
