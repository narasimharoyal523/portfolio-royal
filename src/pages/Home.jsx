import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Stack, Paper, Avatar, Grid } from '@mui/material';
import { Fade, Zoom } from 'react-awesome-reveal';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #e1bee7, #b2dfdb)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 3,
      }}
    >
      <Fade direction="up" triggerOnce>
        <Paper
          elevation={6}
          sx={{
            maxWidth: 1000,
            p: 4,
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* 👤 Profile Photo */}
            <Grid item xs={12} md={4} textAlign="center">
              <Zoom triggerOnce>
                <Avatar
                  src="/royal-photo.jpg"
                  alt="K. Narasimha Royal"
                  sx={{ width: 200, height: 200, margin: '0 auto', border: '4px solid #7b1fa2' }}
                />
              </Zoom>
            </Grid>

            {/* 📄 Text & Buttons */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4a148c' }} gutterBottom>
                Hi, I'm K. Narasimha Royal 👋
              </Typography>

              <Typography variant="body1" sx={{ mb: 1, color: '#333' }}>
                B.Tech CSE Student @ ALIT, Vijayawada. Passionate software developer skilled in Java,
                Spring Boot, React, and AI tools.
              </Typography>

              <Typography variant="body1" sx={{ mb: 1, color: '#333' }}>
                Building real-world web apps with JSP, MySQL, and Cloud AI. Interested in internships
                in Full-Stack, Cloud & Cybersecurity.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/resume.pdf"
                  download="K_Narasimha_Royal_Resume.pdf"
                >
                  📄 Download Resume
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/about"
                >
                  📘 About Me
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Fade>
    </Box>
  );
};

export default Home;
