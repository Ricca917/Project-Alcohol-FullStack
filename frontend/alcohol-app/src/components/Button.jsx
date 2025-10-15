import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Buttons({ text, to, onClick, sx }) {
    return to ? (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <Button
                variant="contained"
                color="primary"
                onClick={onClick}
                sx={sx} // qui applichiamo lo stile inline
            >
                {text}
            </Button>
        </Link>
    ) : (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            sx={sx}
        >
            {text}
        </Button>
    );
}
