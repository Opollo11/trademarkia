import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Navbar } from '../sections/Navbar';
import '../styles/globals.css';

const colors = {
  brand: {
    500: '#CB5FFE',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendTheme(colors)}>
      <Box
        bgImage={'/Background.png'}
        w={'100vw'}
        h={'100vh'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgPosition={'center'}
      >
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
