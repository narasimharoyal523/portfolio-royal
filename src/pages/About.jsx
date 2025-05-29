import React from 'react';
import { Box, Typography, Paper, Grid, Divider } from '@mui/material';
import { Slide, Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #c8e6c9, #f0f4c3)',
        px: 3,
        py: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Fade direction="down" triggerOnce>
        <Paper elevation={6} sx={{ p: 4, maxWidth: 900, borderRadius: 4, backgroundColor: 'white' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2e7d32' }} gutterBottom>
            👨‍🎓 About Me
          </Typography>

          <Slide direction="left" triggerOnce>
            <Typography variant="body1" sx={{ mb: 2, color: '#333' }}>
              I’m <strong>K. Narasimha Royal</strong>, a passionate B.Tech CSE student at Andhra Loyola Institute
              of Engineering and Technology, Vijayawada.
            </Typography>
          </Slide>

          <Divider sx={{ my: 2 }} />

          <Slide direction="right" triggerOnce>
            <Typography variant="body1" sx={{ color: '#333' }}>🎓 Education</Typography>
            <Typography>• B.Tech CSE – ALIT (2023 - Present)</Typography>
            <Typography>• Intermediate (MPC) – Sri Chaitanya Jr. College (2021 - 2023)</Typography>
            <Typography>• 10th Class (CBSE) – Gopi Krishna Central School (2021)</Typography>
          </Slide>

          <Divider sx={{ my: 2 }} />

          <Slide direction="up" triggerOnce>
            <Typography variant="body1" sx={{ color: '#333' }}>💻 Skills</Typography>
            <Typography>
              Java, Python, Spring Boot, MySQL, JSP, Servlets, React, Git, Bootstrap, Kali Linux,
              Vertex AI, Dialogflow CX, and more.
            </Typography>
          </Slide>
        </Paper>
      </Fade>
    </Box>
  );
};

export default About;
