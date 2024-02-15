import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@/components/theme-provider";
import Video from "./components/pages/Video.jsx";
import NotFound from "./components/pages/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/video/:name" element={<Video />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </ThemeProvider>
);
