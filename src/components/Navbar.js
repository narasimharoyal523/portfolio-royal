import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1a237e' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Narasimha Royal
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/skills">Skills</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button
          color="inherit"
          component="a"
          href="/resume.pdf"
          target="_blank"
          startIcon={<DescriptionIcon />}
        >
          Resume
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
