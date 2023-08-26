import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={configureStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
