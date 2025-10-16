import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pairings from "./pages/Pairings.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Home page */}
                <Route path="/" element={<Home />} />
                
                {/* Pairings page: parametro dinamico id */}
                <Route path="/pairings/:id" element={<Pairings />} />
            </Routes>
        </BrowserRouter>
    );
}
