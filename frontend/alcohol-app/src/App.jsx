// Import dei moduli principali di React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import delle pagine principali
import Home from "./pages/Home.jsx";       // Pagina Home: lista prodotti e ricerca barcode
import Pairings from "./pages/Pairings.jsx"; // Pagina Pairings: mostra food pairings e cocktail per un prodotto

// Componente principale dell'applicazione
export default function App() {
    return (
        // BrowserRouter: gestisce la navigazione tra le pagine tramite URL
        <BrowserRouter>
            
            {/* Routes: definisce tutte le route dell'app */}
            <Routes>
                
                {/* Route per la Home
                    - path="/" significa che questa route corrisponde all'URL principale
                    - element={<Home />} indica quale componente mostrare */}
                <Route path="/" element={<Home />} />
                
                {/* Route per i Pairings di un prodotto
                    - path="/pairings/:id" indica che ":id" è un parametro dinamico (EAN del prodotto)
                    - element={<Pairings />} mostra il componente Pairings
                    - Pairings leggerà l'id dal parametro URL tramite useParams */}
                <Route path="/pairings/:id" element={<Pairings />} />
                
            </Routes>
        </BrowserRouter>
    );
}
