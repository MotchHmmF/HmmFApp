import { extendTheme, transition } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#430ac7",
        _dark: "#0cebd1",
      },
      heroGradientEnd: {
        default: "#0c2deb",
        _dark: "#38eb0c",
      },
      bg: {
        default: "#ffffff",
        _dark: "#16161D",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  styles: {
    global: {
      body: {
        transition: 'background 1s ease !important',
        backgroundColor: 'bg',
        color: 'text',
      }
    }
  }
});

export default theme;
