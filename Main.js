import React from "react";
import ReactDOM from "react-dom/client";

const y = React.createElement("div",null,
    React.createElement("h2", null, "Hello World Program using React"),
    React.createElement("p", null, "This is a nested React element")
);
const x = document.createElement("h3");
x.textContent = "Hello World Program using JS DOM";
document.body.appendChild(x);
const htmlRoot = document.getElementById("root");
const rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(y);

