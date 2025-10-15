import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Buttons from '../components/Button'; 
import logo from "../assets/logo.png";
import Quagga from 'quagga';
import QrCodeIcon from '@mui/icons-material/QrCode';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  width: '100%',
  marginTop: theme.spacing(2),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),    
}));

export default function WelcomeCard({ onSearch }) {
  const [searchValue, setSearchValue] = React.useState('');
  const [scannerActive, setScannerActive] = React.useState(false);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (onSearch) onSearch(searchValue);
    }
  };

  const startScanner = () => {
    if (scannerActive) return;

    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#scanner-container'),
        constraints: {
          width: 400,
          height: 250,
          facingMode: "environment",
        },
      },
      decoder: {
        readers: ["ean_8_reader"],
      },
    }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      Quagga.start();
      setScannerActive(true);
    });

    Quagga.onDetected((data) => {
      const code = data.codeResult.code;
      if (!code) return;
      console.log("Barcode rilevato:", code);

      if (onSearch) onSearch(code);

      Quagga.offDetected(); // disattiva listener per evitare doppioni
      stopScanner();
    });
  };

  const stopScanner = () => {
    if (scannerActive) {
      Quagga.stop();
      setScannerActive(false);
    }
  };

  return (
    <Card classes={{ root: 'welcomeCard' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <CardMedia
            component="img"
            image={logo}
            alt="Project: Alcohol logo"
            sx={{ width: 200, height: 120 }}            
          />
        </Box>

        {/* Titolo */}
        <Typography variant="h4" component="div" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
          Benvenuto su Project: Alcohol
        </Typography>

        {/* Testo descrittivo */}
        <Typography variant="body1" color="text.secondary" sx={{ color: 'white', textAlign: 'center', mb: 2 }}>
          Scannerizza il barcode o inseriscilo manualmente.
          <br />
          Vedrai le informazioni dettagliate e abbinamenti consigliati.
        </Typography>

        {/* Barra di ricerca */}
        <Search>
          <SearchIconWrapper>
            <QrCodeIcon />
          </SearchIconWrapper>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StyledInputBase
              placeholder="Inserisci un Barcode…"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyPress}
              inputProps={{ 'aria-label': 'search' }}
              sx={{ width: '50ch', color: 'white' }}
            />
            <Buttons
              text="Cerca"
              onClick={() => onSearch && onSearch(searchValue)}
            />
          </Box>
        </Search>

        {/* Bottone per avviare lo scanner */}
        <Box sx={{ mt: 2 }}>
          <Buttons text="Attiva Scan" onClick={startScanner} />
        </Box>        

        {/* Div scanner SEMPRE montato */}
        <Box
          id="scanner-container"
          sx={{
          width: 400,
          height: 250,
          border: '1px solid #000',
          borderRadius: '8px',
          mt: 2,
          display: scannerActive ? 'block' : 'none',
          position: 'relative',
          overflow: 'hidden',
          }}
        />
      </CardContent>
    </Card>
  );
}
