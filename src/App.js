import "./App.css";

/**
 * Imports the theme
 */
import { theme } from "./theme";

/**
 * Imports Material UI Components
 */
import { ThemeProvider } from "@mui/material";

/**
 * Imports components
 */
import { LandingPage } from "./components/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
