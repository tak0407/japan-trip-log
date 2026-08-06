import { createRoot } from "react-dom/client";
import App from "./App";
import "../styles.css";

window.GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

createRoot(document.getElementById("root")).render(<App />);
