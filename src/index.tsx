import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./styles/index.css";
import { CLINT_ID_GOOGLE } from "const";

import moment from "moment";
import "moment/locale/vi";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { App } from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
moment.locale("vi");

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GoogleOAuthProvider clientId={CLINT_ID_GOOGLE}>
                <App />
            </GoogleOAuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
