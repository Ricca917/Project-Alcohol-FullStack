import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";
import Buttons from "../components/Button";
import CardContainer from "../components/CardContainer";
import PrimarySearchAppBar from "../components/AppBar.jsx";

export default function Pairings() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [pairings, setPairings] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (barcode) => {
    navigate(`/?barcode=${barcode}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch prodotto usando id
        const res = await fetch(`http://127.0.0.1:8000/api/products/${id}/`);
        if (!res.ok) throw new Error("Errore nel recupero del prodotto");
        const foundProduct = await res.json();
        setProduct(foundProduct);

        // Fetch abbinamenti cibo (senza campo immagine)
        const pairRes = await fetch(`http://127.0.0.1:8000/api/products/${id}/food_pairings/`);
        if (!pairRes.ok) throw new Error("Errore nel recupero degli abbinamenti cibo");
        setPairings(await pairRes.json());

        // Fetch cocktails
        const cocktailRes = await fetch(`http://127.0.0.1:8000/api/products/${id}/cocktails/`);
        if (!cocktailRes.ok) throw new Error("Errore nel recupero dei cocktail");
        setCocktails(await cocktailRes.json());
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
        <PrimarySearchAppBar onSearch={handleSearch} visible={true} />
        <CardContainer>
          <p>Nessun prodotto selezionato</p>
          <Buttons text="Torna alla Home" to="/" />
        </CardContainer>
      </>
    );
  }

  return (
    <>
      <PrimarySearchAppBar onSearch={handleSearch} visible={true} />
      <CardContainer>
        <h1>Lista Abbinamenti</h1>
        <h2>{product.name}</h2>

        {pairings.length > 0 ? pairings.map((p, i) => (
          <ProductCard
            key={i}
            data={{
              name: p.food_name,
              description: p.notes,
              image: p.image || "https://via.placeholder.com/150", // placeholder
            }}
            showButton={false}
          />
        )) : <p>Nessun abbinamento disponibile</p>}

        {cocktails.length > 0 && (
          <>
            <h3>Cocktail Consigliati</h3>
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
          </>
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
