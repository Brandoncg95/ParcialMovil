import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Centro Cultural
                </Typography>
                <Button color="inherit" component={Link} to="/epocas">Épocas</Button>
                <Button color="inherit" component={Link} to="/generos">Géneros</Button>
                <Button color="inherit" component={Link} to="/musicos">Músicos</Button>
                <Button color="inherit" component={Link} to="/instrumentos">Instrumentos</Button>
                <Button color="inherit" component={Link} to="/obras">Obras</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
