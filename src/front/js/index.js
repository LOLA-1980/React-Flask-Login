import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "../styles/index.css";
import Layout from "./layout";

const basename = process.env.BASENAME || "";

//render your react application
ReactDOM.render(
    <BrowserRouter basename={basename}>
        <Layout />
    </BrowserRouter>,
    document.querySelector("#app")
);
