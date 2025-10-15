import { useParams, useNavigate } from "react-router-dom"; // Leggere parametri URL, navigare programmaticamente
import { useState, useEffect } from "react"; // useState per stati locali, useEffect per side effects
import ProductCard from "../components/ProductCard.jsx"; // Mostra prodotti o abbinamenti
import Buttons from '../components/Button'; // Bottone riutilizzabile
import CardContainer from '../components/CardContainer'; // Contenitore stilizzato
import PrimarySearchAppBar from '../components/AppBar.jsx'; // Barra di ricerca

export default function Pairings() {
  const { id } = useParams(); // ID prodotto dall'URL
  const navigate = useNavigate(); // Per navigare programmaticamente

  // Stati principali
  const [product, setProduct] = useState(null);
  const [pairings, setPairings] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchCompleted, setSearchCompleted] = useState(true);

  // Ricerca barcode
  const handleSearch = (barcode) => {
    navigate(`/?barcode=${barcode}`);
    setSearchCompleted(true);
  };

  // Fetch dati dal backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch prodotto
        const res = await fetch(`http://127.0.0.1:8000/api/products/${id}/`);
        if (!res.ok) throw new Error("Prodotto non trovato");
        const data = await res.json();
        setProduct(data);

        // Fetch abbinamenti cibo
        const pairRes = await fetch(`http://127.0.0.1:8000/api/products/${id}/food_pairings/`);
        if (!pairRes.ok) throw new Error("Abbinamenti non trovati");
        const pairData = await pairRes.json();
        setPairings(pairData);

        // Fetch cocktails
        const cocktailRes = await fetch(`http://127.0.0.1:8000/api/products/${id}/cocktails/`);
        if (!cocktailRes.ok) throw new Error("Cocktail non trovato");
        const cocktailData = await cocktailRes.json();
        setCocktails(cocktailData);

      } catch (err) {
        console.error(err);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Caricamento...</p>;

  if (!product) {
    return (
      <>
        <PrimarySearchAppBar onSearch={handleSearch} visible={searchCompleted} />
        <CardContainer>
          <p>Nessun prodotto selezionato</p>
          <Buttons text="Torna alla Home" to="/" />
        </CardContainer>
      </>
    );
  }

  return (
    <>
      <PrimarySearchAppBar onSearch={handleSearch} visible={searchCompleted} />
      <CardContainer>
        <h1>Lista Abbinamenti</h1>
        <h2>{product.name}</h2>

        {/* Abbinamenti cibo */}
        <div>
          {pairings.length > 0 ? pairings.map((p, i) => (
            <ProductCard
              key={i}
              data={{
                name: p.food_name,
                image: p.image || "https://via.placeholder.com/150",
                description: p.notes
              }}
              showButton={false}
            />
          )) : <p>Nessun abbinamento disponibile</p>}
        </div>

        {/* Cocktails */}
        {cocktails.length > 0 ? (
          <>
            <h3>Cocktail Consigliati</h3>
            <div>
              {cocktails.map((c, i) => (
                <ProductCard
                  key={i}
                  data={{
                    name: c.name,
                    image: c.image || "https://via.placeholder.com/150",
                    description: c.description || c.instructions || "Nessuna descrizione"
                  }}
                  showButton={false}
                />
              ))}
            </div>
          </>
        ) : (
          <p>Nessun cocktail disponibile</p>
        )}

        <Buttons
          text="Torna alla Home"
          to="/"
          sx={{
            backgroundColor: "#7b1e1e",
            color: "white",
            '&:hover': { backgroundColor: "#5a1515" }
          }}
        />
      </CardContainer>
    </>
  );
}
