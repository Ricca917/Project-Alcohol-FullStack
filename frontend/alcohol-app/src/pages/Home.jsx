import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimarySearchAppBar from "../components/AppBar.jsx";
import Container from "@mui/material/Container";
import ProductCard from "../components/ProductCard.jsx";
import CardContainer from "../components/CardContainer.jsx";
import WelcomeCard from "../components/WelcomeCard.jsx";
import BarcodeScanner from "../components/BarcodeScanner.jsx"; // il componente scanner

export default function Home() {
  const [product, setProduct] = useState(null);
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [scanning, setScanning] = useState(false); // stato per mostrare scanner
  const navigate = useNavigate();

  // Funzione per ricerca prodotto tramite barcode
  const handleSearch = async (barcode) => {
    if (!barcode || barcode.trim() === "") {
      alert("Inserisci un codice a barre valido");
      return;
    }

    try {
      // Fetch al backend usando barcode
      const res = await fetch(`http://127.0.0.1:8000/api/products/?barcode=${barcode}`);
      if (!res.ok) throw new Error("Errore nel recupero del prodotto");
      const data = await res.json();

      if (!data || data.length === 0) {
        alert("Prodotto non trovato! Controlla il codice a barre.");
        return;
      }

      const foundProduct = data[0];
      setProduct(foundProduct);
      setSearchCompleted(true);
      setScanning(false); // ferma scanner dopo rilevamento
    } catch (err) {
      console.error("Errore nel fetch:", err);
      alert("Impossibile contattare il server. Assicurati che il backend sia attivo.");
    }
  };

  return (
    <>
      <PrimarySearchAppBar onSearch={handleSearch} visible={true} />

      <Container>
        {/* Schermata iniziale: attende inserimento barcode */}
        {!product && !scanning && (
          <CardContainer>
            <WelcomeCard
              onSearch={handleSearch}
              onStartScan={() => setScanning(true)} // pulsante per attivare scanner
            />
          </CardContainer>
        )}

        {/* Scanner */}
        {scanning && (
          <CardContainer>
            <BarcodeScanner onDetected={handleSearch} />
          </CardContainer>
        )}

        {/* Prodotto trovato */}
        {product && (
          <CardContainer>
            <ProductCard
              data={product}
              showButton={true}
              onClick={() => navigate(`/pairings/${product.barcode}`)} // naviga usando barcode
            />
          </CardContainer>
        )}
      </Container>
    </>
  );
}
