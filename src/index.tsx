import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import "./styles/global.css";
import reportWebVitals from "./reportWebVitals";
import { StyleContextProvider } from "./styles/style.context";
import { routes } from "./routes";
import { renderRoutes } from "react-router-config";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleContextProvider>
        <Provider store={store}>{renderRoutes(routes as any)}</Provider>
      </StyleContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
