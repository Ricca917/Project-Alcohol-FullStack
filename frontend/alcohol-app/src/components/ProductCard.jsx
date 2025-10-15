import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Buttons from './Button'; // il tuo componente bottone

export default function ProductCard({ data, showButton = true }) {
  return (
    <Card>
      {/* Immagine */}
      <CardMedia
        component="img"
        image={data.image}
        alt={data.name}
      />

      {/* Contenuti */}
      <CardContent>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>

        {/* Mostra solo se almeno uno dei tre campi esiste */}
        {(data.type || data.abv || data.origin) && (
          <Typography variant="body2" color="white">
            {[data.type, data.abv, data.origin].filter(Boolean).join(" • ") }
          </Typography>
        )}

        <Typography variant="body2" sx={{ mt: 1 }}>
          {data.description}
        </Typography>
      </CardContent>

      {/* Bottone per abbinamenti */}
      {showButton && data.id && (
        <CardActions>
          <Buttons text="Vedi Abbinamenti" to={`/pairings/${data.id}`} />
        </CardActions>
      )}
    </Card>
  );
}

