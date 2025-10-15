// theme.jsx
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7b1e1e", // colore principale
    },
    secondary: {
      main: "#a83232", // colore hover
    },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: 'white',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.card-container': {
            backgroundColor: '#d8c8a2ff',
            marginTop: '32px',
            paddingTop: '32px',
            paddingBottom: '32px',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            color: 'white',
          },
        },
      },
    },  
    MuiAppBar: {
      styleOverrides: {
        root: {
          width: "100vw",
          margin: 0,
          left: 0,
          right: 0,
        }
      }
    },    
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          marginBottom: "16px",
          backgroundColor: "#7b1e1e", // Sfondo contenuto Card!!   
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
          color: 'white',        
        },
        welcomeCard: {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          textAlign: "center",
          backgroundColor: "#fdf6e3", // Sfondo della Card
          
        }
      },
    },    
    MuiCardContent: {
      styleOverrides: {
        root: {
          flex: "1 1 auto",
          fontFamily: "sans-serif",
          color: 'white',
          minWidth: 0, 
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          whiteSpace: "normal", //  va a capo normalmente
          wordBreak: "break-word", //  spezza le parole lunghe
          overflowWrap: "break-word",
          color: 'white',
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: "150px",
          objectFit: "cover",
          borderRadius: "6px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: 'sans-serif',
          backgroundColor: '#d8c8a2ff',
          color: 'black',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          marginBottom: "16px", // spazio tra le card negli abbinamenti
          color: 'white',
        },
      },
    },
  },
});

export default theme;