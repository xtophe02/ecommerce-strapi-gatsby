import { createTheme } from "@mui/material/styles"

// A custom theme for this app
const green = "#99B898"
const darkGreen = "#708670"
const tan = "#FECEA8"
const lightRed = "#FF847C"
const red = "#E84A5F"
const offBlack = "#2A3A3B"
const grey = "#747474"

const theme = createTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: darkGreen,
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    h1: {
      fontSize: "3.5rem",
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      color: green,
    },

    h2: {
      fontFamily: "Montserrat",
      fontSize: "2rem",
      fontWeight: 500,
      color: "#fff",
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      fontWeight: 300,
      color: green,
    },
    h4: {
      fontSize: "2rem",
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      color: "#fff",
    },
    h5: {
      fontSize: "1rem",
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      color: "#fff",
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      color: grey,
    },
  },
  overrides: {},
})

export default theme
