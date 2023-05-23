import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme_blue = extendTheme({
  colors: {
    myCustomBlueColor: {
      50: "#e8f2f0",
      100: "#ddebe8",
      200: "#d1e5e0",
      300: "#c6ded8",
      400: "#bad8d1",
      500: "#afd2c9",
      600: "#a3cbc1",
      700: "#98c4ba",
      800: "#77b2a4",
      900: "#62a696",
    },
  },
  components: {
    Button: {
      variants: {
        customColor: {
          bg: "myCustomBlueColor.500",
          color: "white",
          _hover: {
            bg: "myCustomBlueColor.600",
          },
          _active: {
            bg: "myCustomBlueColor.700",
          },
        },
      },
    },
  },
});


export default theme_blue