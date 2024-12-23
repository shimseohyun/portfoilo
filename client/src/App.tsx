// style
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/global";
import theme from "@styles/theme";

// router
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
