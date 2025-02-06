import "./index.css";
const { createRoot } = require("react-dom/client");
const { default: App } = require("./App");

const el = document.getElementById("root");

const root = createRoot(el);

root.render(<App />);
