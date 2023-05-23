import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme_pink = extendTheme({
  colors: {
    myCustomPinkColor: {
      50: "#ffffff",
      100: "#fdefef",
      200: "#fcdfdf",
      300: "#fbcfcf",
      400: "#f9bfbf",
      500: "#f8afaf",
      600: "#f6a0a0",
      700: "#f49090",
      800: "#f38080",
      900: "#f17070",
    },
  },
  components: {
    Button: {
      variants: {
        customColor: {
          bg: "myCustomPinkColor.700",
          color: "white",
          _hover: {
            bg: "myCustomPinkColor.800",
          },
          _active: {
            bg: "myCustomPinkColor.900",
          },
        },
      },
    },
  },
});


export default theme_pink