import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import reportWebVitals from "lib/reportWebVitals";
import { GlobalStyle } from "style/global-styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
reportWebVitals();
