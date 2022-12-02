import { createTheme, darken, lighten } from "@mui/material/styles";

/**
 * Creates the Theme
 */
export const theme = createTheme({
  palette: {
    base: {
      dark: "#242E42",
      white: "#fff",
      text: "#454D5E",
      gray: "#9CA1AA",
      grayDark: "#707784",
      grayLight: "#C8CACF",
      grayThin: "#F4F4F5"
    },
    common: {
      white: "#fff",
      black: "#000"
    },
    primary: {
      light: "#71DAE0",
      lighter: "#42CDD6",
      main: "#13C1CC",
      darker: "#16A3B0",
      dark: "#198694",
      20: "#214C5E",
      40: "#1E697A",
      60: "#198694",
      80: "#16A3B0",
      100: "#13C1CC",
      120: "#42CDD6",
      140: "#71DAE0",
      160: "#A1E6EB",
      180: "#D0F3F5"
    },
    secondary: {
      light: "#FAD07E",
      lighter: "#F8C053",
      main: "#F6B028",
      darker: "#CC962D",
      dark: "#A27C32",
      20: "#4E483D",
      40: "#786238",
      60: "#A27C32",
      80: "#CC962D",
      100: "#F6B028",
      120: "#F8C053",
      140: "#FAD07E",
      160: "#FBDFA9",
      180: "#FDEFD4"
    },
    error: {
      light: "#EC9595",
      lighter: "#E57171",
      main: "#DF4E4E",
      darker: darken("#DF4E4E", 0.4),
      dark: darken("#DF4E4E", 0.2),
      20: darken("#DF4E4E", 0.8),
      40: darken("#DF4E4E", 0.6),
      60: darken("#DF4E4E", 0.4),
      80: darken("#DF4E4E", 0.2),
      100: "#DF4E4E",
      120: "#E57171",
      140: "#EC9595",
      160: "#F2B8B8",
      180: "#F9DCDC",
      195: "#FDF6F6"
    },
    success: {
      light: "#92e4b3",
      lighter: "#6edb99",
      main: "#4AD280",
      darker: darken("#4AD280", 0.2),
      dark: darken("#4AD280", 0.4),
      20: darken("#4AD280", 0.8),
      40: darken("#4AD280", 0.6),
      60: darken("#4AD280", 0.4),
      80: darken("#4AD280", 0.2),
      100: "#4AD280",
      120: "#6edb99",
      140: "#92e4b3",
      160: "#b7edcc",
      180: "#dbf6e6",
      195: "#f6fdf9"
    },
    info: {
      light: lighten("#587baf", 0.2),
      lighter: lighten("#587baf", 0.4),
      main: "#6E9ADB",
      darker: darken("#587baf", 0.4),
      dark: darken("#587baf", 0.2),
      20: darken("#587baf", 0.8),
      40: darken("#587baf", 0.6),
      60: darken("#587baf", 0.4),
      80: darken("#587baf", 0.2),
      100: "#587baf",
      120: "#6E9ADB",
      140: lighten("#587baf", 0.4),
      160: lighten("#587baf", 0.6),
      180: lighten("#587baf", 0.8),
      195: lighten("#587baf", 1)
    },
    scheduled: {
      light: lighten("#a78bc1", 0.2),
      lighter: lighten("#a78bc1", 0.4),
      main: "#a78bc1",
      darker: darken("#a78bc1", 0.4),
      dark: darken("#a78bc1", 0.2),
      20: darken("#a78bc1", 0.8),
      40: darken("#a78bc1", 0.6),
      60: "#6D3F98",
      80: darken("#a78bc1", 0.2),
      100: "#a78bc1",
      120: lighten("#6D3F98", 0.4),
      140: lighten("#a78bc1", 0.4),
      160: lighten("#a78bc1", 0.6),
      180: "#ECDBF6",
      195: lighten("#a78bc1", 1)
    }
  },
  typography: {
    fontFamily: "'Sora', sans-serif",
    fontDisplay: "'Sora', sans-serif"
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 2100,
    drawer: 2200,
    modal: 2300,
    snackbar: 1400,
    tooltip: 1500
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1366,
      xl: 1920
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});
