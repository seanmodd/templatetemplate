import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  Flex,
} from '@chakra-ui/react';

import { jsx, ThemeProvider, useTheme, Global, css } from '@emotion/react';

import preset from '@rebass/preset';
import customTheme from './theme.js';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={preset}>
        <ChakraProvider resetCSS theme={customTheme}>
          <Flex direction="column">
            <ColorModeProvider
              options={{
                useSystemColorMode: true,
              }}
            >
              {/* <Flex justify="center" align="center" w="100%" h="93vh"> */}
              <GlobalStyle>
                <Component {...pageProps} />
              </GlobalStyle>
              {/* </Flex> */}
            </ColorModeProvider>
          </Flex>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
