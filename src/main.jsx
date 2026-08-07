import { createRoot } from "react-dom/client";
import App from "./App";
import "@seed-design/css/base.css";
import "../styles.css";

window.GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

createRoot(document.getElementById("root")).render(<App />);
