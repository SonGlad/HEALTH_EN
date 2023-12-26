import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "globalStyles/globalStyles.styled";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { theme } from "./globalStyles/theme";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/HEALTH_EN">
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);
