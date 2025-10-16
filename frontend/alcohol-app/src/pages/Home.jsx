import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimarySearchAppBar from "../components/AppBar.jsx";
import Container from "@mui/material/Container";
import ProductCard from "../components/ProductCard.jsx";
import CardContainer from "../components/CardContainer.jsx";
import WelcomeCard from "../components/WelcomeCard.jsx";
import BarcodeScanner from "../components/BarcodeScanner.jsx";

export default function Home() {
  const [product, setProduct] = useState(null);
  const [scanning, setScanning] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (barcode) => {
    if (!barcode || barcode.trim() === "") {
      alert("Inserisci un codice a barre valido");
      return;
    }

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/products/?barcode=${barcode}`);
      if (!res.ok) throw new Error("Errore nel recupero del prodotto");
      const data = await res.json();

      if (!data || data.length === 0) {
        alert("Prodotto non trovato! Controlla il codice a barre.");
        return;
      }

      setProduct(data[0]);
      setScanning(false);
    } catch (err) {
      console.error("Errore nel fetch:", err);
      alert("Impossibile contattare il server.");
    }
  };

  return (
    <>
      <PrimarySearchAppBar onSearch={handleSearch} visible={true} />
      <Container>
        {!product && !scanning && (
          <CardContainer>
            <WelcomeCard
              onSearch={handleSearch}
              onStartScan={() => setScanning(true)}
            />
          </CardContainer>
        )}

        {scanning && (
          <CardContainer>
            <BarcodeScanner onDetected={handleSearch} />
          </CardContainer>
        )}

        {product && (
          <CardContainer>
            <ProductCard
              data={product}
              showButton={true}
              onClick={() => navigate(`/pairings/${product.id}`)}
            />
          </CardContainer>
        )}
      </Container>
    </>
  );
}
