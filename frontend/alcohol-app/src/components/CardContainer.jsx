import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function CardContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container 
        maxWidth="sm"
        className="card-container"
      >
        {children}
      </Container>
    </React.Fragment>
  );
}
