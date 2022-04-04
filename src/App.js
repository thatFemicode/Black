import { ThemeProvider } from "styled-components";
import { MainStyled } from "./Styling/MainStyled";
import { theme } from "./Styling/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainStyled></MainStyled>
    </ThemeProvider>
  );
}

export default App;
